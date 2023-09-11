import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="flex flex-col gap-12 my-20" id="abt">
            <div className="flex items-center">
                <div className="flex flex-1 flex-col items-start gap-4">
                    <h1 className="font-bold text-[32px] bg-yellow-400 rounded-md px-2">
                        About Us
                    </h1>
                    <p className="text-justify font-medium text-xl">
                        Welcome to Gapshap, where stories find their voice and connections flourish
                        through the power of words. Gapshap is more than just a platform; it's a
                        vibrant community of storytellers and listeners, where narratives come alive
                        and perspectives unite.
                    </p>
                </div>
                <div className="flex-1 relative h-[300px]">
                    <Image src={"/abt.png"} fill={true} alt="about" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-4">
                <h1 className="font-bold text-[32px] bg-yellow-400 rounded-md px-2">Our Mission</h1>
                <p className="text-justify font-medium text-xl">
                    At Gapshap, we believe that every story matters, and every voice deserves to be
                    heard. Our mission is to provide a platform where individuals from all walks of
                    life can share their experiences, passions, and insights. We aim to foster
                    meaningful conversations, inspire creativity, and connect people through the art
                    of storytelling.
                </p>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="font-bold text-[32px] bg-yellow-400 rounded-md px-2">
                    Why Gapshap?
                </h1>
                <p className="text-justify font-medium text-xl mb-2">
                    <strong>Diverse Topics:</strong> Whether you're passionate about travel,
                    technology, health, or any other subject, Gapshap offers a space for you to
                    explore, express, and engage with stories from various domains.
                </p>
                <p className="text-justify font-medium text-xl mb-2">
                    <strong>Community Engagement:</strong> Our community is built on respect,
                    empathy, and support. We encourage meaningful interactions, feedback, and
                    connections that transcend geographical boundaries.
                </p>
                <p className="text-justify font-medium text-xl">
                    <strong>Inspiration and Learning:</strong> Discover stories that entertain,
                    inform, and inspire. Gapshap is a place to gain new perspectives, learn from
                    others, and grow as both a writer and a reader.
                </p>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="font-bold text-[32px] bg-yellow-400 rounded-md px-2">
                    Join Us in Shaping Stories
                </h1>
                <p className="text-justify font-medium text-xl mb-4">
                    Whether you're an avid storyteller or a curious reader, Gapshap welcomes you
                    with open arms. Share your experiences, thoughts, and dreams with the world, and
                    be part of a community that celebrates the beauty of human expression.
                </p>
            </div>
        </div>
    );
};

export default About;
