import Layout from '../../components/layout'
import Link from 'next/link'

const ChatRoom = () => {
    return (
        <Layout title="Krazz it! - Chat Room">
            <div className="container mx-auto">
                <div className="text-gray-700 bg-white mt-8 mx-auto">
                    <p>Chat Room</p>
                </div>
                <div className="grid grid-cols-3 bg-gray-200 mt-2 py-2 rounded h-64">
                    <div className="flex flex-grow col-span-1 box-border h-150 w-auto inline text-white bg-white py-1 px-4 mx-2 rounded">
                        <div className="p-2 text-gray-700">
                            <ul>
                                <li className="group">
                                    Channel
                                    <ul className="hidden group-">
                                        <li><Link href="#"><a>General</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    Direct Message
                                    <ul>
                                        <li>Admin</li>
                                        <li>Supports</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-2 box-border h-150 w-auto inline text-gray-700 bg-white py-1 px-4 mx-2">
                        <div class="group text-black">
                            <p>Hover me for text transitions!</p>
                            <button className="btn-blue transition invisible transform duration-500 ease-in-out group-hover:-translate-y-5 group-hover:visible">Btn Blue</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 400)
    })
    return {
        props: {}
    }
}

export default ChatRoom