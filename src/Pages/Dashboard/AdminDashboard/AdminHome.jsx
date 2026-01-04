import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie } from 'recharts';

const AdminHome = () => {
    const [stats, setStats] = useState({ users: 0, books: 0 });

    useEffect(() => {
        // ডাটাবেস থেকে সব ইউজার এবং বইয়ের সংখ্যা জানার জন্য ফেচ
        // আপনি চাইলে আলাদা API বানিয়েও একবারে আনতে পারেন
        fetch('https://book-haven-server-site.vercel.app/users')
            .then(res => res.json())
            .then(data => setStats(prev => ({ ...prev, users: data.length })));

        fetch('https://book-haven-server-site.vercel.app/books')
            .then(res => res.json())
            .then(data => setStats(prev => ({ ...prev, books: data.length })));
    }, []);

    // চার্টের জন্য ডেটা ফরম্যাট
    const chartData = [
        { name: 'Total Users', value: stats.users },
        { name: 'Total Books', value: stats.books },
    ];

    const COLORS = ['#0088FE', '#00C49F'];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Admin Overview</h2>

            {/* ১. স্ট্যাটিস্টিকস কার্ডস */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                    <p className="text-gray-500 text-sm uppercase font-semibold">Total Users</p>
                    <h3 className="text-4xl font-bold">{stats.users}</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                    <p className="text-gray-500 text-sm uppercase font-semibold">Total Books</p>
                    <h3 className="text-4xl font-bold">{stats.books}</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                    <p className="text-gray-500 text-sm uppercase font-semibold">Platform Status</p>
                    <h3 className="text-2xl font-bold text-green-600">Active</h3>
                </div>
            </div>

            {/* ২. ডাইনামিক চার্ট সেকশন */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-md">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Platform Data (Bar Chart)</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#8884d8">
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Ratio (Pie Chart)</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;