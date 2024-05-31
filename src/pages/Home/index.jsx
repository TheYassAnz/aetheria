import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoReact from '../../assets/logo_reactjs.png'
import LogoDjango from '../../assets/logo_django.png'
import LogoNode from '../../assets/logo_node.png'
import LogoDocker from '../../assets/logo_docker.png'
import PPAbubakar from '../../assets/pp_abubakar.png'

const people = [
    {
        name: 'Yassine ANZAR BASHA',
        role: 'CEO & Developer',
        imageUrl: PPAbubakar,
    },
    {
        name: 'Abubakar ALIEV',
        role: 'CTO & Back-End Developer',
        imageUrl: PPAbubakar,
    },
    // More people...
]
export default function Home() {
    return (
        <>
            <div className="mx-auto max-w-2xl py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Obtenez un site internet à votre image.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Nous créons des solutions innovantes afin de booster
                        votre image sur le web.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="#"
                            className="rounded-full bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Get started
                        </Link>
                        <Link
                            to="/contact"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            About us <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl rounded-full bg-black px-16 py-20 text-white">
                <h2 className="text-center text-lg font-semibold leading-8">
                    Nous travaillons avec les meilleurs technologies du marché
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                        src={LogoReact}
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                        src={LogoDjango}
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                        src={LogoNode}
                        alt="Tuple"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                        src={LogoDocker}
                        alt="Statamic"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
            <div className="mx-auto mt-10 py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Meet our leadership
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit
                        odio vitae elementum enim vitae ullamcorper suspendisse.
                    </p>
                </div>
                <div className="mt-10 flex justify-center">
                    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 md:grid-cols-2 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="col-span-2 flex items-center gap-x-6 p-10">
                                    <img
                                        className="max-w-44 flex-shrink-0 rounded-full grayscale"
                                        src={person.imageUrl}
                                        alt=""
                                    />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm font-semibold leading-6 text-gray-600">
                                            {person.role}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
