import Image from "next/image";

const Hero = () => {
    return (
        <div>
            <h2>Hero</h2>

            <div className="border p-3 flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="flex flex-col gap-2">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Maiores beatae, nostrum reprehenderit nesciunt
                        quidem labore ratione inventore. Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Dolorum atque fuga,
                        aut magni neque corporis ullam placeat quaerat eum.
                        Eveniet unde odit repudiandae minus ex? Obcaecati
                        facilis nulla ducimus adipisci.
                    </p>
                    <div>
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-md cursor-pointer ">
                            Read more
                        </button>
                    </div>
                </div>
                <div className="block  overflow-hidden rounded-lg  py-5 px-5 z-1 mt-5">
                    <Image
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872"
                        width={500}
                        height={500}
                        alt="hero"
                        priority
                        className="w-full h-full object-contain rounded-md "
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
