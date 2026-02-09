'use client';

import { useState } from 'react';
import { Plus, Trash2, Printer, MapPin, Navigation, FileUp, Download, Check, X } from 'lucide-react';
import * as XLSX from 'xlsx';
import { toast } from 'sonner';

interface Address {
    name: string;
    phone?: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

export default function PrintPage() {
    const [fromAddress, setFromAddress] = useState<Address>({
        name: 'Replique Gifts',
        address: 'Vengara,Malappuram',
        city: 'Malappuram',
        state: 'Kerala',
        zip: '676304'
    });

    const [toForm, setToForm] = useState<Address>({
        name: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const [toList, setToList] = useState<Address[]>([
        { name: 'John Doe', phone: '9876543210', address: '123 Main St, Apt 4B', city: 'New York', state: 'NY', zip: '10001' },
        { name: 'Jane Smith', phone: '9876543211', address: '456 Oak Avenue', city: 'Los Angeles', state: 'CA', zip: '90001' },
        { name: 'Michael Brown', phone: '9876543212', address: '789 Pine Road', city: 'Chicago', state: 'IL', zip: '60601' },
        { name: 'Emily Davis', phone: '9876543213', address: '321 Elm Street', city: 'Houston', state: 'TX', zip: '77001' },
        { name: 'Chris Wilson', phone: '9876543214', address: '654 Maple Drive', city: 'Phoenix', state: 'AZ', zip: '85001' },
        { name: 'Sarah Miller', phone: '9876543215', address: '987 Cedar Lane', city: 'Philadelphia', state: 'PA', zip: '19101' },
        { name: 'David Taylor', phone: '9876543216', address: '159 Birch Court', city: 'San Antonio', state: 'TX', zip: '78201' },
        { name: 'Jessica Moore', phone: '9876543217', address: '753 Walnut Street', city: 'San Diego', state: 'CA', zip: '92101' }
    ]);

    const [isUploading, setIsUploading] = useState(false);
    const [pendingAddresses, setPendingAddresses] = useState<Address[]>([]);

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFromAddress({ ...fromAddress, [e.target.name]: e.target.value });
    };

    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToForm({ ...toForm, [e.target.name]: e.target.value });
    };

    const addToAddress = () => {
        if (!toForm.name || !toForm.address) return;
        setToList([...toList, { ...toForm }]);
        setToForm({
            name: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        });
        toast.success('Address added to queue');
    };

    const removeToAddress = (index: number) => {
        setToList(toList.filter((_, i) => i !== index));
    };

    const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const data = evt.target?.result;
                if (!data) return;

                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet) as any[];

                console.log("Uploaded Data:", jsonData);

                const newAddresses: Address[] = jsonData.map(row => {
                    // Normalize keys (case-insensitive)
                    const getVal = (keys: string[]) => {
                        const key = Object.keys(row).find(k => keys.includes(k.toLowerCase().trim()));
                        return key ? String(row[key]).trim() : '';
                    };

                    return {
                        name: getVal(['name', 'recipient', 'customer name', 'recipient name']),
                        phone: getVal(['phone', 'contact', 'mobile', 'phone number', 'tel']),
                        address: getVal(['address', 'street', 'location', 'address line 1']),
                        city: getVal(['city', 'place', 'town']),
                        state: getVal(['state', 'region', 'province']),
                        zip: getVal(['zip', 'zipcode', 'zip code', 'pincode', 'pin code', 'postcode'])
                    };
                }).filter(addr => addr.name && addr.address);

                if (newAddresses.length === 0) {
                    toast.error("No valid addresses found in Excel file.");
                } else {
                    setPendingAddresses(newAddresses);
                    toast.info(`${newAddresses.length} addresses pending confirmation.`);
                }
            } catch (error) {
                console.error("Excel Parsing Error:", error);
                toast.error("Could not read the Excel file.");
            } finally {
                setIsUploading(false);
                e.target.value = ''; // Reset for next upload
            }
        };

        reader.onerror = () => {
            console.error("FileReader Error");
            alert("Error reading file.");
            setIsUploading(false);
        };

        reader.readAsArrayBuffer(file);
    };

    const downloadSample = () => {
        const sampleData = [
            { Name: 'John Doe', Phone: '9876543210', Address: '123 Main St', City: 'New York', State: 'NY', Zip: '10001' },
            { Name: 'Jane Smith', Phone: '8876543211', Address: '456 Westside', City: 'Mumbai', State: 'MH', Zip: '400001' }
        ];
        const ws = XLSX.utils.json_to_sheet(sampleData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sample");
        XLSX.writeFile(wb, "shipping_sample.xlsx");
    };
    const confirmImport = () => {
        setToList(prev => [...prev, ...pendingAddresses]);
        const count = pendingAddresses.length;
        setPendingAddresses([]);
        toast.success(`Successfully imported ${count} addresses!`);
    };

    const cancelImport = () => {
        setPendingAddresses([]);
        toast.error('Import cancelled');
    };

    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-black p-4 md:p-10 font-sans selection:bg-black selection:text-white">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-10">
                    <div>
                        <h1 className="text-5xl font-extrabold tracking-tight text-black dark:text-white mb-2">
                            Shipping <span className="text-zinc-500">Labels</span>
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg">Manage your shipping addresses and print labels effortlessly.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={downloadSample}
                            className="flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors active:scale-95"
                        >
                            <Download size={20} />
                            Sample Excel
                        </button>
                        <button
                            onClick={() => window.print()}
                            className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform active:scale-95 shadow-xl"
                        >
                            <Printer size={20} />
                            Print All Labels
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* From Address Section */}
                    <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-black dark:text-white">
                                <Navigation size={24} />
                            </div>
                            <h2 className="text-2xl font-bold dark:text-white">Sender Information</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Company Name / Sender</label>
                                <input
                                    name="name"
                                    value={fromAddress.name}
                                    onChange={handleFromChange}
                                    placeholder="Enter sender name"
                                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Street Address</label>
                                <input
                                    name="address"
                                    value={fromAddress.address}
                                    onChange={handleFromChange}
                                    placeholder="Enter street address"
                                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">City</label>
                                <input
                                    name="city"
                                    value={fromAddress.city}
                                    onChange={handleFromChange}
                                    placeholder="City"
                                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">State</label>
                                <input
                                    name="state"
                                    value={fromAddress.state}
                                    onChange={handleFromChange}
                                    placeholder="State"
                                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">ZIP Code</label>
                                <input
                                    name="zip"
                                    value={fromAddress.zip}
                                    onChange={handleFromChange}
                                    placeholder="ZIP Code"
                                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="space-y-10">
                        {/* Excel Upload Section */}
                        <section className="bg-white dark:bg-zinc-900 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm hover:border-black dark:hover:border-white transition-all group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                                    <FileUp size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold dark:text-white text-black">Bulk Upload</h2>
                                    <p className="text-sm text-zinc-500">Upload Excel (.xlsx, .xls) for batch printing</p>
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="file"
                                    accept=".xlsx, .xls"
                                    onChange={handleExcelUpload}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6 text-center border border-zinc-100 dark:border-zinc-700 pointer-events-none">
                                    <p className="text-zinc-500 font-medium">
                                        {isUploading ? 'Processing file...' : 'Click or drag Excel file here'}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Confirmation Section */}
                        {pendingAddresses.length > 0 && (
                            <section className="bg-black text-white rounded-3xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300 ring-4 ring-white/10">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/10 rounded-2xl text-white">
                                            <FileUp size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Review Import</h3>
                                            <p className="text-zinc-400">{pendingAddresses.length} recipients found in file</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={cancelImport}
                                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
                                        >
                                            <X size={20} />
                                            Cancel
                                        </button>
                                        <button
                                            onClick={confirmImport}
                                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-white/5"
                                        >
                                            <Check size={20} />
                                            Confirm Import
                                        </button>
                                    </div>
                                </div>
                                <div className="max-h-52 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                    {pendingAddresses.map((addr, i) => (
                                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/10 last:border-0 group">
                                            <div>
                                                <p className="font-bold text-white group-hover:text-zinc-200 transition-colors uppercase tracking-tight">{addr.name}</p>
                                                <p className="text-xs text-zinc-500 uppercase tracking-widest">{addr.address}</p>
                                            </div>
                                            <div className="text-right mt-2 sm:mt-0">
                                                <p className="text-sm font-medium text-zinc-400">{addr.city}, {addr.state}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* To Address Section */}
                        <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-black dark:text-white">
                                    <MapPin size={24} />
                                </div>
                                <h2 className="text-2xl font-bold dark:text-white">Single Recipient</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Recipient Name</label>
                                    <input
                                        name="name"
                                        value={toForm.name}
                                        onChange={handleToChange}
                                        placeholder="Name"
                                        className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Phone Number</label>
                                    <input
                                        name="phone"
                                        value={toForm.phone}
                                        onChange={handleToChange}
                                        placeholder="Phone"
                                        className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Street Address</label>
                                    <input
                                        name="address"
                                        value={toForm.address}
                                        onChange={handleToChange}
                                        placeholder="Address"
                                        className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">City</label>
                                    <input
                                        name="city"
                                        value={toForm.city}
                                        onChange={handleToChange}
                                        placeholder="City"
                                        className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">State</label>
                                    <input
                                        name="state"
                                        value={toForm.state}
                                        onChange={handleToChange}
                                        placeholder="State"
                                        className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">ZIP Code</label>
                                    <input
                                        name="zip"
                                        value={toForm.zip}
                                        onChange={handleToChange}
                                        placeholder="ZIP Code"
                                        className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-black dark:text-white"
                                    />
                                </div>
                                <button
                                    onClick={addToAddress}
                                    className="md:col-span-2 mt-4 flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-4 rounded-2xl font-bold hover:bg-black dark:hover:bg-white transition-colors"
                                >
                                    <Plus size={20} />
                                    Add Recipient
                                </button>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Recipient List / Table */}
                <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm">
                    <div className="p-8 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/50 flex items-center justify-between">
                        <h2 className="text-2xl font-bold dark:text-white">Shipping Queue</h2>
                        <span className="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 px-4 py-1 rounded-full text-sm font-bold">
                            {toList.length} {toList.length === 1 ? 'Address' : 'Addresses'}
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-zinc-400 dark:text-zinc-500 text-sm font-semibold uppercase tracking-wider">
                                    <th className="px-8 py-6">Recipient</th>
                                    <th className="px-8 py-6">Address</th>
                                    <th className="px-8 py-6">Contact</th>
                                    <th className="px-8 py-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                {toList.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-20 text-center text-zinc-400 dark:text-zinc-600 italic">
                                            No recipients added yet. Add one above to get started.
                                        </td>
                                    </tr>
                                ) : (
                                    toList.map((item, index) => (
                                        <tr key={index} className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                            <td className="px-8 py-6">
                                                <div className="hidden print:block ship-from mb-4">
                                                    <p className="text-[20pt] font-semibold text-zinc-500 uppercase">From:</p>
                                                    <p className="font-bold">{fromAddress.name || 'Sender'}</p>
                                                    <p>{fromAddress.address}</p>
                                                    <p>{fromAddress.city}, {fromAddress.state} {fromAddress.zip}</p>
                                                </div>
                                                <div className="print:mt-4">
                                                    <p className="hidden print:block text-[20pt] font-semibold text-zinc-500 uppercase">To:</p>
                                                    <p className="font-bold text-black dark:text-white text-lg">{item.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-zinc-600 dark:text-zinc-400">
                                                {item.address}, {item.city}, {item.state} {item.zip}
                                            </td>
                                            <td className="px-8 py-6 text-zinc-600 dark:text-zinc-400">{item.phone || 'N/A'}</td>
                                            <td className="px-8 py-6 text-right print:hidden">
                                                <button
                                                    onClick={() => removeToAddress(index)}
                                                    className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            {/* Print styles */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    header, 
                    section:not(:last-child), 
                    button,
                    footer,
                    thead {
                        display: none !important;
                    }
                    body {
                        background: white !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        color: #000000 !important;
                    }
                    .max-w-7xl {
                        max-width: none !important;
                        width: 100% !important;
                        margin: 0 !important;
                    }
                    section {
                        border: none !important;
                        box-shadow: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    table {
                        width: 100% !important;
                        border-collapse: collapse !important;
                        table-layout: fixed !important;
                    }
                    tbody {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr !important;
                        width: 210mm !important;
                    }
                    tr {
                        display: flex !important;
                        flex-direction: column !important;
                        width: 105mm !important;
                        height: 148.5mm !important;
                        border: 1px solid #000000 !important;
                        padding: 1.5cm 1.2cm !important;
                        box-sizing: border-box !important;
                        page-break-inside: avoid !important;
                        position: relative !important;
                    }
                    td {
                        display: block !important;
                        padding: 0 !important;
                        border: none !important;
                        font-size: 15pt !important;
                        width: 100% !important;
                        color: #000000 !important;
                        line-height: 1.2 !important;
                    }
                    td:not(:first-child) {
                        margin-top: 0.4cm !important;
                    }
                    .ship-from {
                        display: block !important;
                        margin-bottom: 1.2cm !important;
                        font-size: 12pt !important;
                        color: #000000 !important;
                        border-bottom: 2px solid #000000 !important;
                        padding-bottom: 0.3cm !important;
                    }
                    .font-bold {
                        font-weight: 800 !important;
                        font-size: 17pt !important;
                        color: #000000 !important;
                    }
                    .text-lg {
                        font-size: 19pt !important;
                        font-weight: 900 !important;
                        color: #000000 !important;
                    }
                    p {
                        color: #000000 !important;
                        margin: 0 !important;
                    }
                    span {
                        color: #000000 !important;
                    }
                }
            `}</style>
        </div>
    );
}