import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          tempore asperiores accusantium iste consequuntur, sapiente voluptates
          non odit earum. At velit, eius mollitia eaque repudiandae deleniti
          accusamus laborum esse nostrum!
        </p>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$79</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            rem doloremque molestias, inventore quasi veniam non quod delectus
            modi sunt unde placeat similique. Amet iusto, nemo voluptate
            doloribus adipisci deserunt.
          </p>
        </div>
        <div className="">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            rem doloremque molestias, inventore quasi veniam non quod delectus
            modi sunt unde placeat similique. Amet iusto, nemo voluptate
            doloribus adipisci deserunt.
          </p>
        </div>
        <div className="">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            rem doloremque molestias, inventore quasi veniam non quod delectus
            modi sunt unde placeat similique. Amet iusto, nemo voluptate
            doloribus adipisci deserunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
