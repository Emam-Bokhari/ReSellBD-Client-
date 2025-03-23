import Container from "@/components/shared/Container";
import Image from "next/image";
import { Fragment } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Calendar } from "lucide-react";

export default function BlogDetailsPage() {
  const badgeColors = [
    { base: "bg-blue-100 text-blue-800", hover: "hover:bg-blue-200" },
    { base: "bg-green-100 text-green-800", hover: "hover:bg-green-200" },
    { base: "bg-yellow-100 text-yellow-800", hover: "hover:bg-yellow-200" },
    { base: "bg-purple-100 text-purple-800", hover: "hover:bg-purple-200" },
    { base: "bg-pink-100 text-pink-800", hover: "hover:bg-pink-200" },
    { base: "bg-indigo-100 text-indigo-800", hover: "hover:bg-indigo-200" },
    { base: "bg-teal-100 text-teal-800", hover: "hover:bg-teal-200" },
  ];

  const getRandomColor = () =>
    badgeColors[Math.floor(Math.random() * badgeColors.length)];

  return (
    <Fragment>
      <Container className="border-2 border-red-500  ">
        {/* Thumbnail Image */}
        <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] ">
          <Image
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="thumbnail image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        {/* author info and date*/}
        <div className="flex gap-8 items-center mt-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage
                src="https://res.cloudinary.com/dvpqm6zct/image/upload/v1742736505/user_ug5gxm.png"
                alt="user icon"
              />
              <AvatarFallback className="text-lg">Author</AvatarFallback>
            </Avatar>
            <p className="text-sm text-gray-500">
              by <span className="underline">Moshfiqur Rahman</span>
            </p>
          </div>

          <div className="flex gap-4">
            <Calendar size={18} />
            <p className="text-sm text-gray-500">25 May 2025</p>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          {/* title */}
          <h3 className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            culpa.
          </h3>
          {/* introduction */}
          <p className="text-base text-gray-500 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            unde cumque maiores expedita eveniet iusto libero quis corrupti
            ullam quaerat.
          </p>
          {/* main content */}
          <p className="text-base text-gray-500 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            similique harum necessitatibus sint maiores voluptate, dicta omnis
            saepe rem optio fugiat ipsa dolores totam cum, enim ipsum id tenetur
            dolorum. Illum possimus molestias ea quod itaque numquam rerum sunt
            corrupti quidem doloribus, cupiditate quisquam nesciunt quo,
            consectetur eum sint impedit mollitia obcaecati voluptatum ratione.
            Quam, consequatur rem debitis sunt cumque velit provident qui
            ratione! Ipsa corrupti officiis, rem nostrum in ut explicabo alias
            eius beatae quos ex nulla facere reprehenderit quam blanditiis
            laboriosam error. Cumque asperiores ab rem facere placeat dolores,
            repellat quas laudantium commodi, dolore pariatur impedit, similique
            sit nemo fuga eius odio quia cupiditate laboriosam. Porro amet illo
            voluptate, sint facilis recusandae cupiditate inventore consectetur
            nihil dolorum. Consequatur aliquam rerum, reprehenderit sit
            architecto esse repellendus provident ea soluta sapiente vitae enim
            voluptates iste quas. Tenetur quibusdam nam distinctio, repudiandae
            reiciendis doloribus eveniet veniam pariatur corporis ad quas,
            praesentium rem cum ipsum officia laboriosam eius? Consequuntur,
            voluptatem necessitatibus sequi obcaecati quas laudantium deserunt,
            quaerat blanditiis tempora aliquam laborum id, minus reprehenderit
            vel animi dignissimos cum iusto dolores repudiandae molestiae
            quibusdam consectetur! Molestias facere eum quibusdam voluptatum,
            quasi at cum consequuntur quo iusto repudiandae ducimus nostrum esse
            natus aliquam vero!
          </p>
        </div>
      </Container>
    </Fragment>
  );
}
