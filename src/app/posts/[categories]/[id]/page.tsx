import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    params: { categories: String; id: String };
};

const page = ({ params }: Props) => {
    return (
        <div>
            {/* top */}
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
                        <div className="flex items-center justify-center border-2 rounded-md w-[40%] md:w-[20%] mt-5 h-[50px]">
                            <span className="border-r-2 flex justify-center items-center w-[25%] hover:bg-green-500 rounded-md cursor-pointer h-[100%]">
                                +
                            </span>
                            <span className="flex justify-center w-[50%]">0</span>
                            <span className="border-l-2 flex justify-center items-center w-[25%] hover:bg-red-500 rounded-md cursor-pointer h-[100%]">
                                -
                            </span>
                        </div>
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
                    libero sint dolorem sequi nam adipisci molestiae nihil magnam quibusdam sed
                    deleniti expedita dignissimos asperiores inventore laboriosam, ab id? Similique
                    expedita quo esse quia asperiores nisi eos provident. Mollitia nesciunt ab
                    repellendus tenetur odio placeat doloremque omnis, sequi iste dolores aspernatur
                    ex excepturi ullam ipsam, veniam expedita ea ipsa beatae nisi, nobis sapiente.
                    Praesentium corporis ab nostrum possimus! Vel a voluptatibus earum illo ratione.
                    Ad, tenetur ducimus! Consectetur exercitationem quae totam saepe hic aspernatur
                    maiores, facere voluptatum modi doloribus blanditiis, itaque neque, ipsum
                    dignissimos. Sequi odio quia quasi? Laudantium obcaecati corporis modi deserunt
                    veritatis eaque veniam eos esse iusto aliquam, doloremque sint praesentium enim,
                    placeat quisquam dignissimos maiores non pariatur quam, assumenda quos?
                    Voluptate porro veniam inventore doloribus. Sapiente, illo. Animi, fugiat! Iste
                    ab assumenda consequatur dignissimos libero hic, culpa ipsa! Enim sunt
                    cupiditate error et quam officia at illum, natus ipsa sed vitae, perferendis
                    eligendi delectus numquam? Ratione iste soluta quam voluptas quos ipsum hic
                    facere iusto laborum iure. Veritatis voluptate officiis porro odit eum eaque
                    nostrum quisquam unde non neque aliquid ratione, assumenda voluptatum mollitia
                    accusamus. Error minus, aperiam facilis delectus aliquam ullam eligendi iure
                    fugit, quam quaerat accusantium voluptates nam dicta sequi molestiae quidem ut
                    dignissimos quo labore pariatur totam, sapiente libero. Fugit, accusantium
                    repellat. Iure vel aperiam perspiciatis iusto expedita tempora vitae non? Ipsum
                    provident natus sunt vel, rerum aliquam vero commodi magni, quisquam earum
                    inventore aut quam quas. Atque voluptates nobis labore vitae. Culpa libero, nam
                    blanditiis, natus repudiandae vel officiis temporibus totam eligendi dignissimos
                    beatae quidem tempore perspiciatis voluptatibus ducimus laborum, laudantium
                    dicta odio. Culpa fugiat consectetur necessitatibus at inventore facere iusto!
                    Totam neque a libero, distinctio eos officiis cum omnis ratione quis perferendis
                    porro ullam error nihil, veniam repellendus vero dolorum sit nulla, sapiente
                    eligendi beatae animi! Totam qui assumenda earum. Maiores odit neque labore
                    nostrum architecto molestiae officiis error temporibus earum, quas laboriosam ad
                    dolorem voluptas amet eaque accusamus doloremque autem praesentium. Ab
                    doloremque incidunt excepturi repudiandae eaque quam culpa. Expedita rem
                    officiis voluptates ad. Labore, obcaecati. Placeat, iste deleniti, similique
                    neque doloremque nemo inventore quibusdam tempora iure, nihil itaque non cumque
                    ex magnam ullam quaerat perspiciatis voluptatem fuga quae? Dolores hic incidunt
                    reiciendis at harum quod architecto quidem iusto repellendus possimus culpa
                    accusamus eum deleniti natus, fugit sit excepturi itaque omnis accusantium
                    exercitationem! Et esse aut reprehenderit eum voluptates. Illum fuga voluptatem
                    consectetur beatae quos ullam dolore nesciunt ea aut at harum, voluptatum
                    molestias perspiciatis ab totam. Tempora unde, laudantium beatae alias excepturi
                    possimus repellat nulla eius quidem quam. Labore, est consequuntur cum vel
                    quisquam deserunt a? Tempore reiciendis quisquam consequatur eos, iure aliquid
                    error repellat nulla temporibus dolorem est ea nobis quae minima accusamus esse
                    consectetur architecto. Eos?
                </p>
                <Link href={`/posts/${params.categories}`}>
                    <Button className="mb-6 w-[25%] md:w-[15%]">Back</Button>
                </Link>
            </div>
            {/* comments */}
            <div>
                <Textarea
                    placeholder="Enter your comment..."
                    className="mb-4 w-[100%] md:w-[60%]"
                />
                <Button className=" mb-6 w-[25%] md:w-[15%]">Post</Button>
                <h1 className="text-2xl">Comments:</h1>
            </div>
        </div>
    );
};

export default page;
