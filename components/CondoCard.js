import Link from "next/link";
import Nformatter from "./Nformatter";
import Image from "next/legacy/image";

export default function CondoCard(props) {
  function checkPricing(price) {
    if (parseInt(price) > 0) {
      return `Starting from low $${Nformatter(price, 2)}`;
    } else {
      return `Pricing not available`;
    }
  }

  function daysCount(x) {
    let date_1 = new Date(x);
    let date_2 = new Date();
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    if (TotalDays == 0) {
      return "Today";
    } else {
      return Math.abs(TotalDays) + " day ago ";
    }
  }

  return (
    <>
      <div className="card border-0 shadow-lg rounded-3xl my-3 my-md-0 condocard bigg bg-white">
        <div className="relative p-2">
          <Link
            href={`/${props.city.slug}/${props.slug}`}
            className="mylinkk"
            target="_blank"
          >
            {props.image ? (
              <img
                loading="lazy"
                src={`https://api.condomonk.ca${props.image.image}`}
                className="h-64 w-full object-cover rounded-xl"
                alt={`${props.project_name} located at ${props.project_address} image`}
              />
            ) : (
              <img
                loading="lazy"
                src="/noimage.webp"
                className="h-64 w-full object-cover rounded-xl"
                alt={`no image available for ${props.project_name}`}
              />
            )}
          </Link>
          <span className="absolute left-4 top-5 rounded-full bg-orange-500 px-2 py-1 text-white text-sm">
            {props.status}
          </span>
        </div>

        <div className="px-3 py-2">
          <div className="mb-1 flex">
            <i className="bi bi-geo-alt-fill text-orange-500 mr-2"></i>
            <span className="text-sm">{props.project_address}</span>
          </div>

          <h2 className="mb-1 text-2xl font-bold text-gray-900">
            {props.project_name}
          </h2>

          <div className="mb-1 flex items-center text-gray-500 text-sm">
            <span>By {props.developer.name}</span>
          </div>
          <div className="mb-1 flex items-center text-gray-500 text-sm">
            <span>Aprox Completion: {props.occupancy}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-orange-500">
                {checkPricing(props.price_starting_from)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
