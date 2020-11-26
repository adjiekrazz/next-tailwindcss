import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
    var [sate, setState] = useState(false)
    
    useEffect(() => {
        var x = document.getElementById('nav')
        if (x.className === "relative md:static hidden w-full h-full md:flex flex-grow md:items-center md:w-auto md:block") {
            x.className = "relative md:static w-full h-full md:flex flex-grow md:items-center md:w-auto md:block"
        } else {
            x.className = "relative md:static hidden w-full h-full md:flex flex-grow md:items-center md:w-auto md:block"
        }
    })
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black shadow-md md:h-12">
            <div className="container md:mx-auto md:h-full">
                <div className="flex h-full md:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-gray-200 hover:text-red-600 hover:border-red-600 mx-2 my-2" onClick={() => setState(sate ^= true)}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="relative md:static w-full h-full flex flex-grow items-center md:w-auto md:block" id="nav">
                    <ul className="md:flex-grow text-sm md:inline-block mx-2 md:mx-auto h-full">
                        <li className="group h-8 md:inline-block md:h-full">
                            <Link href="/">
                                <a className="flex h-full items-center md:inline-block md:mt-0 text-white group-hover:text-red-600 md:p-3">
                                    Dashboard
                                </a>
                            </Link>
                        </li>
                        <li className="group h-full md:inline-block md:h-full">
                            <a href="#" className="flex h-full items-center md:inline-block md:mt-0 text-white group-hover:text-red-600 md:p-3">
                                Data Karyawan
                                <svg className="fill-current h-4 w-4 ml-2 inline-block text-white group-hover:text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </a>
                            <ul className="shadow-md rounded relative md:fixed md:invisible text-gray-700 md:-ml-2 py-2 my-2 md:group-hover:visible w-auto bg-white transition duration-300 ease-in-out transform md:group-hover:-translate-y-2">
                                <li className="inline-block px-5">
                                    <ul>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Karyawan Aktif
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Kontrak Karyawan
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Surat Peringatan
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="inline-block px-5 align-top">
                                    <ul>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Karyawan Keluar
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Nomor SP
                                                </a>
                                            </Link>
                                        </li>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="group h-full md:inline-block relative md:h-full">
                            <a href="#" className="flex h-full items-center md:inline-block md:mt-0 text-white group-hover:text-red-600 md:p-3">
                                Form & Laporan
                                <svg className="fill-current h-4 w-4 ml-2 inline-block text-white group-hover:text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </a>
                            <ul className="shadow-md rounded relative md:fixed md:invisible text-gray-700 md:-ml-2 py-2 my-2 md:group-hover:visible w-40 bg-white transition duration-300 ease-in-out transform md:group-hover:-translate-y-2">
                                <li className="inline-block px-5">
                                    <ul>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Common
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Exclusive
                                                </a>
                                            </Link>
                                        </li>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="group h-full md:inline-block relative md:h-full">
                            <a href="#" className="flex h-full items-center md:inline-block md:mt-0 text-white group-hover:text-red-600 md:p-3">
                                Data Barang
                                <svg className="fill-current h-4 w-4 ml-2 inline-block text-white group-hover:text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </a>
                            <ul className="shadow-md rounded relative md:fixed md:invisible text-gray-700 md:-ml-2 py-2 my-2 md:group-hover:visible w-auto bg-white transition duration-300 ease-in-out transform md:group-hover:-translate-y-2">
                                <li className="inline-block px-5">
                                    <ul>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Daftar Barang
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Barang Dipinjam
                                                </a>
                                            </Link>
                                        </li>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="group h-full md:inline-block md:h-full">
                            <a href="#" className="flex h-full items-center md:inline-block md:mt-0 text-white group-hover:text-red-600 md:p-3">
                                Pengaturan
                                <svg className="fill-current h-4 w-4 ml-2 inline-block text-white group-hover:text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </a>
                            <ul className="shadow-md rounded relative md:fixed md:invisible text-gray-700 md:-ml-2 py-2 my-2 md:group-hover:visible w-auto bg-white transition duration-300 ease-in-out transform md:group-hover:-translate-y-2">
                                <li className="inline-block px-5">
                                    <ul>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Fitur
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Aplikasi
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Database
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="inline-block px-5 align-top">
                                    <ul>
                                        <li>
                                            <Link href="">
                                                <a className="bg-white hover:text-red-600 block whitespace-no-wrap py-1">
                                                Satuan Barang
                                                </a>
                                            </Link>
                                        </li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="group h-8 md:inline-block md:h-full">
                            <Link href="/chatroom">
                                <a className="flex h-full items-center md:inline-block md:mt-0 text-white group-hover:text-red-600 md:p-3">
                                    Chat Room
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
