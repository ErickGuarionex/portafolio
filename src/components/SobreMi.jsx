export default function SobreMi(){
    return(
        <div className="mt-20 pb-10">
            <h1 className="text-3xl">Sobre Mi</h1>

            <div className="flex gap-x-11 mt-8 items-center">
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae beatae itaque quis ab cumque tenetur eligendi velit voluptate odio, sequi facere aspernatur suscipit! Maiores possimus accusantium iste sequi molestiae adipisci unde voluptatum laboriosam tempora sint officiis iusto, quos atque.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae beatae itaque quis ab cumque <span className="text-yellow-200">tenetur eligendi velit voluptate odio</span> suscipit! Maiores possimus accusantium iste sequi molestiae adipisci unde voluptatum laboriosam tempora sint officiis iusto, quos atque.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae beatae itaque quis ab cumque <span className="text-yellow-200">tenetur eligendi velit voluptate odio</span>, sequi facere aspernatur suscipit! Maiores possimus accusantium iste sequi molestiae adipisci unde voluptatum laboriosam tempora sint officiis iusto, quos atque.
                    </p>
                </div>
                <img src="public/erick-img.png" alt="" className="w-[250px] border-2 border-gray-400 rotate-6 p-3"/>
            </div>
        </div>
    )
}