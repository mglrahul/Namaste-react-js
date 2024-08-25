import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}

      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState("about");
  const updateSection = (name, status) => {
    if(!status) {
        setSectionConfig("")
    } else {
        setSectionConfig(name)
    }
  }
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit animi temporibus nemo ea cum eius ut quis voluptates, asperiores sequi expedita repellat corporis pariatur culpa laudantium nobis facilis aperiam quas. Expedita temporibus doloribus soluta illo perferendis ratione blanditiis aliquam, corrupti rerum fugit sapiente quidem voluptatem odit deserunt nostrum veniam aperiam debitis, labore itaque officia alias repudiandae tempore ad! Cumque, natus? Blanditiis dolores in quas quam. Obcaecati quas, sit libero accusantium praesentium eveniet magni ipsa doloribus cumque sint blanditiis repellat neque cupiditate odit nemo voluptas. Adipisci est iste id delectus debitis pariatur commodi fugiat, itaque, voluptatibus cupiditate repellendus necessitatibus sunt?"
        }
        isVisible={sectionConfig === "about"}
        setIsVisible={(status)=> updateSection("about", status)}
      />

      <Section
        title={"Team Instamart"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit animi temporibus nemo ea cum eius ut quis voluptates, asperiores sequi expedita repellat corporis pariatur culpa laudantium nobis facilis aperiam quas. Expedita temporibus doloribus soluta illo perferendis ratione blanditiis aliquam, corrupti rerum fugit sapiente quidem voluptatem odit deserunt nostrum veniam aperiam debitis, labore itaque officia alias repudiandae tempore ad! Cumque, natus? Blanditiis dolores in quas quam. Obcaecati quas, sit libero accusantium praesentium eveniet magni ipsa doloribus cumque sint blanditiis repellat neque cupiditate odit nemo voluptas. Adipisci est iste id delectus debitis pariatur commodi fugiat, itaque, voluptatibus cupiditate repellendus necessitatibus sunt?"
        }
        isVisible={sectionConfig === "team"}
        setIsVisible={(status)=>updateSection("team", status)}
      />

      <Section
        title={"Careers"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit animi temporibus nemo ea cum eius ut quis voluptates, asperiores sequi expedita repellat corporis pariatur culpa laudantium nobis facilis aperiam quas. Expedita temporibus doloribus soluta illo perferendis ratione blanditiis aliquam, corrupti rerum fugit sapiente quidem voluptatem odit deserunt nostrum veniam aperiam debitis, labore itaque officia alias repudiandae tempore ad! Cumque, natus? Blanditiis dolores in quas quam. Obcaecati quas, sit libero accusantium praesentium eveniet magni ipsa doloribus cumque sint blanditiis repellat neque cupiditate odit nemo voluptas. Adipisci est iste id delectus debitis pariatur commodi fugiat, itaque, voluptatibus cupiditate repellendus necessitatibus sunt?"
        }
        isVisible={sectionConfig === "careers"}
        setIsVisible={(status)=>updateSection("careers", status)}
      />
    </div>
  );
};

export default Instamart;
