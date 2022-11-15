import Card from "./Card";

const Cards = () => {
    return (
      <div className="md:px-[5rem]">
        <h3 className="my-10 font-[700] text-[2rem] md:text-[2.9rem]  text-center">Inspiration for your next adventure</h3>
        <div className="flex flex-wrap lg:flex-nowrap">
            <Card src={"/assets/sect_2/frame_1.png"}/>
            <Card src={"/assets/sect_2/frame_2.png"}/>
            <Card src={"/assets/sect_2/frame_3.png"}/>
            <Card src={"/assets/sect_2/frame_4.png"}/>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap mt-6">
            <Card src={"/assets/sect_2/frame_5.png"}/>
            <Card src={"/assets/sect_2/frame_6.png"}/>
            <Card src={"/assets/sect_2/frame_7.png"}/>
            <Card src={"/assets/sect_2/frame_8.png"}/>
        </div>
      </div>
    );
  };
  
  export default Cards;
  