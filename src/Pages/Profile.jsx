import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContex';
import { MdEmail, MdPerson, MdCalendarMonth, MdEdit, MdSave, MdVerified, MdSecurity } from "react-icons/md";
import Swal from 'sweetalert2';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        if (user?.displayName) setName(user.displayName);
    }, [user]);

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`https://book-haven-server-site.vercel.app/users/${user?.email}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ name: name })
            });

            const data = await response.json();
            if (data.success) {
                setIsEditing(false);
                Swal.fire({
                    title: "Updated!",
                    text: "Profile changes saved successfully.",
                    icon: "success",
                    confirmButtonColor: "#6366F1"
                });
            }
        } catch (error) {
            Swal.fire("Error", "Failed to update profile", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-950 p-6 md:p-12">
            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Profile</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">Manage your personal account details</p>
                    </div>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${isEditing ? "bg-red-50 text-red-600" : "bg-white text-indigo-600 shadow-sm border border-gray-100 hover:shadow-md"
                            }`}
                    >
                        {isEditing ? "Cancel" : <><MdEdit /> Edit Profile</>}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Left Side: Identity Card */}
                    <div className="lg:col-span-4">
                        <div className="bg-white dark:bg-gray-900 rounded-[32px] p-10 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center">
                            <div className="relative">
                                <img
                                    src={user?.photoURL || 'https://i.ibb.co/5GzXkwq/user.png'}
                                    alt="User"
                                    className="w-36 h-36 rounded-[40px] object-cover ring-8 ring-indigo-50 dark:ring-gray-800 shadow-inner"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-indigo-600 p-2.5 rounded-2xl text-white shadow-lg">
                                    <MdVerified size={20} />
                                </div>
                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">{name || "Member"}</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-[0.2em] mt-2 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full">
                                Active User
                            </p>

                            <div className="w-full mt-10 pt-8 border-t border-gray-50 dark:border-gray-800 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm font-medium">Joined</span>
                                    <span className="text-gray-700 dark:text-gray-300 font-bold text-sm">Jan 2026</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm font-medium">Books Added</span>
                                    <span className="text-gray-700 dark:text-gray-300 font-bold text-sm">12</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Information Details */}
                    <div className="lg:col-span-8">
                        <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                            <div className="p-10 space-y-10">

                                {/* Info Row: Name */}
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20">
                                    <div className="w-32 flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                                        <MdPerson size={18} /> Name
                                    </div>
                                    <div className="flex-1">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl p-4 text-gray-800 dark:text-white font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                            />
                                        ) : (
                                            <p className="text-gray-800 dark:text-gray-200 font-bold text-lg">{name || "Not Provided"}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Info Row: Email */}
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20">
                                    <div className="w-32 flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                                        <MdEmail size={18} /> Email
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 dark:text-gray-200 font-bold text-lg">{user?.email}</p>
                                    </div>
                                </div>

                                {/* Info Row: Date */}
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20">
                                    <div className="w-32 flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                                        <MdCalendarMonth size={18} /> Created
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 dark:text-gray-200 font-bold text-lg">
                                            {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toDateString() : 'N/A'}
                                        </p>
                                    </div>
                                </div>

                                {isEditing && (
                                    <div className="pt-6">
                                        <button
                                            onClick={handleSaveProfile}
                                            disabled={loading}
                                            className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-black shadow-xl shadow-indigo-100 dark:shadow-none hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
                                        >
                                            {loading ? "Saving Changes..." : <><MdSave size={22} /> Save Information</>}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Professional Footer Card */}
                        <div className="mt-8 bg-gradient-to-br from-gray-900 to-black rounded-[32px] p-8 flex items-center justify-between shadow-2xl">
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                                    <MdSecurity className="text-indigo-400" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg tracking-tight">Security ID</h4>
                                    <p className="text-gray-500 font-mono text-xs mt-1">{user?.uid}</p>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <div className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                    Protected
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;