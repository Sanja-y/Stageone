import React, { useState } from 'react';

const Sidebar = () => {
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
    };

    return (
        <div className="mt-10 bg-gray-800 text-white h-screen fixed top-0 left-0 w-[5%] ">
            <ul className="pt-10">

                <li className="mt-10 mb-5">
                    <a
                        href="#"
                        className="block text-center"
                        onClick={() => handleIconClick('home')}
                    >
                        <span
                            className={`text-xl ${selectedIcon === 'home' ? 'bg-violet-500 rounded-sm p-1' : ''}`}
                            style={{ width: '30px' }}
                        >
                            <i className="fa-solid fa-border-all w-8"></i>
                        </span>
                    </a>
                </li>
                <li className="mb-5">
                    <a
                        href="#"
                        className="block text-center"
                        onClick={() => handleIconClick('users')}
                    >
                        <span
                            className={`text-xl ${selectedIcon === 'users' ? 'bg-violet-500 rounded-sm p-1' : ''}`}
                            style={{ width: '30px' }}
                        >
                            <i className="fa-solid fa-users w-8"></i>
                        </span>
                    </a>
                </li>
                <li className="mb-5">
                    <a
                        href="#"
                        className="block text-center"
                        onClick={() => handleIconClick('list')}
                    >
                        <span
                            className={`text-xl ${selectedIcon === 'list' ? 'bg-violet-500 rounded-sm p-1' : ''}`}
                            style={{ width: '30px' }}
                        >
                            <i className="fa-solid fa-list text-xl w-8"></i>
                        </span>
                    </a>
                </li>

                <li className="mb-5">
                    <a
                        href="#"
                        className="block text-center"
                        onClick={() => handleIconClick('user')}
                    >
                        <span
                            className={`text-xl ${selectedIcon === 'user' ? 'bg-violet-500 rounded-sm p-1' : ''}`}
                            style={{ width: '30px' }}
                        >
                            <i className="fa-solid fa-user text-xl w-8"></i>
                        </span>
                    </a>
                </li>

                <li className="mb-5">
                    <a
                        href="#"
                        className="block text-center"
                        onClick={() => handleIconClick('bag')}
                    >
                        <span
                            className={`text-xl ${selectedIcon === 'bag' ? 'bg-violet-500 rounded-sm p-1' : ''}`}
                            style={{ width: '30px' }}
                        >
                            <i className="fa-solid fa-briefcase text-xl w-8"></i>
                        </span>
                    </a>
                </li>
                <li className="mb-5">
                    <a
                        href="#"
                        className="block text-center"
                        onClick={() => handleIconClick('files')}
                    >
                        <span
                            className={`text-xl ${selectedIcon === 'files' ? 'bg-violet-500 rounded-sm p-1' : ''}`}
                            style={{ width: '30px' }}
                        >
                            <i className="fa-regular fa-file-lines text-xl w-8"></i>
                        </span>
                    </a>
                </li>
                <li className="mb-5">
                    <a
                        href="#"
                        className="block text-center"
                        onClick={() => handleIconClick('notification')}
                    >
                        <span
                            className={`text-xl ${selectedIcon === 'notification' ? 'bg-violet-500 rounded-sm p-1' : ''}`}
                            style={{ width: '30px' }}
                        >
                            <i className="fa-solid fa-bell text-xl w-8"></i>
                        </span>
                    </a>
                </li>
                <li className="mb-5">
                    <a
                        href="#"
                        className="block text-center"
                        onClick={() => handleIconClick('settings')}
                    >
                        <span
                            className={`text-xl ${selectedIcon === 'settings' ? 'bg-violet-500 rounded-sm p-1' : ''}`}
                            style={{ width: '30px' }}
                        >
                            <i className="fa-solid fa-gear text-xl w-8"></i>
                        </span>
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;