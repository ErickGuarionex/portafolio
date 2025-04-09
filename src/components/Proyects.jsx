import ProyectElement from "./ProyectElement";

const proyects = [
    {
        img: "/",
        name: 'PROYECTO #1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis soluta atque laboriosam, sed, culpa tempora reiciendis aut explicabo reprehenderit consequuntur similique quas recusandae aspernatur praesentium iste, eaque quisquam dolores fuga!'
    },
    {
        img: "/",
        name: 'PROYECTO #2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis soluta atque laboriosam, sed, culpa tempora reiciendis aut explicabo reprehenderit consequuntur similique quas recusandae aspernatur praesentium iste, eaque quisquam dolores fuga!'
    },
    {
        img: "/",
        name: 'PROYECTO #3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis soluta atque laboriosam, sed, culpa tempora reiciendis aut explicabo reprehenderit consequuntur similique quas recusandae aspernatur praesentium iste, eaque quisquam dolores fuga!'
    }
]

export default function Proyects(){
    return(
        <div>
            <h1 className="text-3xl mb-10 pb-3 w-[170px]">{'Proyects 🧑‍💻'}</h1>

            {proyects.map((proyect, i) => <ProyectElement proyect={proyect} index={i} key={i}/>)}
        </div>
    )
}