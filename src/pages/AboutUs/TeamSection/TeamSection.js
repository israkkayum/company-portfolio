import React from "react";
const people = [
  {
    name: "Murad Atlukhanov",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQHGq0KJlAlZTA/profile-displayphoto-shrink_800_800/0/1612434702135?e=2147483647&v=beta&t=SGVuW1RbcPr0qc4NrPS8k6Q9NFlJUyusFLB89WIkl4k",
  },
  {
    name: "Ahmet Coşkun",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/292292098_105634188879764_1511036094717385031_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_ohc=GscQR5AqJ6MAX8jqzWF&_nc_ht=scontent.fdac138-1.fna&oh=00_AfD9RQZzhEW-J-et5AOAcXyD-MtRVXwsJyGhZw8J6d2Hqw&oe=64DE2416",
  },
  // More people...
];

const TeamSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32 mt-20">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSection;
