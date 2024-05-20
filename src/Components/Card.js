// with parameter data{}

// id
// 26
// name
// "Angel Salvadore"
// slug
// "26-angel-salvadore"
// image
// "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2…"
// fullname
// "Angel Salvadore Bohusk"
// publisher
// "Tempest"
const Card = ({ data }) => {
  return (
    <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={data.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left">
            {data.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-left">
          <span className="font-semibold">Full Name:</span> {data.fullname}
        </p>
        <p className="mb-3 font-normal text-gray-700 text-left">
          <span className="font-semibold">Publisher:</span> {data.publisher}
        </p>
      </div>
    </div>
  );
};

export default Card;
