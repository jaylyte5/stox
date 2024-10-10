import { FaSearch } from 'react-icons/fa';

export default function SocialPage() {
    return (
        <div className="flex border-2 border-red-500 justify-between w-full p-20 items-center  gap-44">

            <div className="flex flex-col">
                <div className="flex justify-left mt-45 mb-20">
                    <h1 className="text-4xl font-bold">Follow</h1>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">Communities</h1>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-64" />
                    </div>
                </div>

                <div className="card bg-white shadow-lg rounded-lg p-2 mt-2">
                    <h2 className="text-xl font-bold mb-2">UserA</h2>
                    {<p className="text-gray-700">90k members </p>}
                    <div className="absolute top-2 right-4">
                        <button className="ml-auto btn btn-primary text-white bg-yellow-500 hover:bg-blue-700 px-6 py-2 rounded">
                            Join
                        </button>
                    </div>
                </div>
                <div className="card bg-white shadow-lg rounded-lg p-2 mt-4">
                    <h2 className="text-xl font-bold mb-2">DaUser8</h2>
                    {<p className="text-gray-700">900k members </p>}
                    <div className="absolute top-2 right-4">
                        <button className="ml-auto btn btn-primary text-white bg-yellow-500 hover:bg-blue-700 px-6 py-2 rounded">
                            Join
                        </button>
                    </div>
                </div>
                <div className="card #a1a1aa shadow-lg rounded-lg p-2 mt-4">
                    <h2 className="text-xl font-bold mb-2">ImWiNnInG</h2>
                    {<p className="text-gray-700">20k members </p>}
                    <div className="absolute top-2 right-4">
                        <button className="ml-auto btn btn-primary text-white bg-yellow-500 hover:bg-blue-700 px-6 py-2 rounded">
                            Join
                        </button>
                    </div>
                </div>
                <div className="card bg-white shadow-lg rounded-lg p-2 mt-4">
                    <h2 className="text-xl font-bold mb-2">WhozBaD</h2>
                    {<p className="text-gray-700">30k members </p>}
                    <div className="absolute top-2 right-4">
                        <button className="ml-auto btn btn-primary text-white bg-yellow-500 hover:bg-blue-700 px-6 py-2 rounded">
                            Join
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-20 w-20 bg-red-500">

            </div>
        </div>
    );
}