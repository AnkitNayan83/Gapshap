import Comment from "@/components/Comment";
import Votes from "@/components/Votes";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type Props = {
    params: { categories: String; id: String };
};

const SinglePost = ({ params }: Props) => {
    return (
        <div>
            {/* top */}
            <Link href={`/posts/${params.categories}`}>
                <ArrowBackIosIcon />
            </Link>
            <div className="flex flex-col md:flex-row my-12">
                <div className="md:flex-1">
                    <h1 className="text-[44px] md:text-[54px] font-bold">This is a test title</h1>
                    <div className="flex flex-col">
                        <div className="flex items-center text-gray-500 gap-6 mb-4">
                            <span>Posted by: Test User</span>
                            <span>Created At: 13/05/2002</span>
                        </div>
                        <span className="bg-blue-500 p-2 rounded-md w-max font-bold text-lg capitalize">
                            {params.categories}
                        </span>

                        <Votes />
                    </div>
                </div>
                <div className="h-[350px] mt-6 md:mt-0 w-[100%] md:flex-1 relative">
                    <Image src={"/culture.png"} fill alt="post" className="object-cover" />
                </div>
            </div>

            <div>
                <p className="text-justify mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum eos magnam
                    odit, animi iusto esse deleniti quaerat sed unde sunt, explicabo error, repellat
                    porro? Harum excepturi blanditiis perferendis quaerat. Alias eos accusantium
                    consequatur facere culpa minima ea ratione explicabo excepturi sint a in
                    repellat odit mollitia, vitae exercitationem! Voluptas a quam blanditiis
                    excepturi maxime eius reiciendis, veritatis delectus enim. Dolor, nisi,
                    repudiandae magnam iusto recusandae impedit sed voluptatem aut magni doloremque
                    assumenda amet earum quasi, cumque neque. Fugiat, similique temporibus! Sapiente
                    est aliquam optio quasi sequi alias. Quae, quaerat. Harum ducimus veniam vero
                    optio officia incidunt, eum quam assumenda quae earum libero dolor minus aliquid
                    repudiandae ullam doloremque voluptatem odit tempore maiores hic necessitatibus
                    at suscipit ab sit. Maxime. Voluptates voluptatibus possimus necessitatibus,
                    sunt eaque rerum reiciendis iusto est deserunt vel tempora totam alias quasi
                    itaque, nisi ratione doloribus cupiditate consequuntur esse unde aspernatur
                    fugiat assumenda! Ratione, in molestiae. Pariatur optio in voluptas ipsum sint
                    autem assumenda, mollitia laboriosam amet sequi molestias excepturi nostrum
                    dolor omnis quasi ipsa. Eligendi veritatis eaque libero quod fugiat? Adipisci
                    cumque odit eligendi eveniet. Molestias ratione repellendus aliquid, laboriosam
                    aspernatur nostrum porro? Inventore magnam repellendus unde esse, nostrum error
                    similique. Unde qui totam, ea, praesentium amet, commodi repellat harum delectus
                    dolore atque mollitia excepturi? Iste impedit cumque accusantium vel quia ab
                    ipsa labore, suscipit id fugit, alias porro. Velit, architecto cum consequuntur
                    sit sunt officiis illo est aspernatur quia omnis voluptate distinctio aperiam
                    ea. Dolor quos dolorem beatae magni laborum error sunt distinctio hic ipsa
                    excepturi iusto officiis nihil mollitia dicta nemo eligendi odio voluptas,
                    quisquam vero aliquam! Autem illo reprehenderit assumenda fugiat quaerat. Vitae
                    eligendi voluptates unde! Reiciendis ipsam perspiciatis nobis facilis libero
                    amet eveniet accusamus adipisci, quo eos non est ea quaerat voluptatem ad
                    ratione nesciunt commodi repellat quam laborum? Praesentium, accusamus. Mollitia
                    nostrum quaerat omnis reiciendis exercitationem corporis aspernatur facere
                    dolores magnam voluptatem explicabo quisquam, aliquid, eos, animi voluptatibus.
                    Itaque harum quas distinctio labore incidunt, eum cum fugit assumenda saepe
                    dignissimos. Quisquam maxime accusantium, maiores ea fuga temporibus laudantium
                    veritatis nesciunt architecto mollitia perspiciatis laboriosam quia voluptas
                    deleniti iure facilis eaque laborum consequatur incidunt consectetur nihil
                    cupiditate possimus? Vero, deleniti porro. Culpa, id? Autem nihil commodi fugit
                    fugiat, iusto soluta veritatis quibusdam fuga amet officiis asperiores quos
                    ratione illo, expedita a cupiditate corporis dicta optio repellat? Quas eum
                    inventore ullam exercitationem! Iste porro incidunt nam labore nulla velit
                    obcaecati, esse vel rerum itaque sint nisi architecto quasi rem molestiae cumque
                    impedit est ullam assumenda? Vitae omnis consectetur facilis id? Facere, beatae?
                    Libero sit harum quaerat officia tenetur, nam impedit eligendi maxime ullam
                    voluptatem nulla quam quisquam pariatur sint totam mollitia aliquam similique,
                    eos ex minus provident voluptate. Illo aliquid asperiores in. Rerum dolore,
                </p>
            </div>
            {/* comments */}
            <div>
                <Textarea
                    placeholder="Enter your comment..."
                    className="mb-4 w-[100%] md:w-[60%]"
                />
                <Button className=" mb-6 w-[25%] md:w-[15%]">Post</Button>
                <h1 className="text-2xl mb-6">Comments:</h1>
                <div>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
