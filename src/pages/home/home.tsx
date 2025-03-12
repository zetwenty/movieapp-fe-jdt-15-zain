import React from "react";
import { useTrendingData } from "../../hooks/useTrendingData";
import { Movie } from "../../services/type";
import Card from "../../component/card/card";

const Home: React.FC = () => {
  const { trending, paginationInfo, setPaginationInfo } = useTrendingData();

  const handlePrevButton = () => {
    if (paginationInfo.page > 1) {
      setPaginationInfo({
        page: paginationInfo.page - 1,
      });
    }
  };

  const handleNextButton = () => {
    if (paginationInfo.page !== paginationInfo.total_pages) {
      setPaginationInfo({
        page: paginationInfo.page + 1,
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col py-10">
        {/* <h1 className="font-semibold text-3xl pl-10">Trending Movie</h1> */}

        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 p-6 md:p-16">
          {trending?.map((item: Movie) => (
            <Card key={item.id} data={item} />
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-10">
          <button
            onClick={handlePrevButton}
            className="bg-gray-900 text-white rounded-lg hover:bg-blue-950 p-2 rounded-lg hover:bg-blue-300"
          >
            Previous
          </button>
          <button
            onClick={handleNextButton}
            className="bg-gray-900 text-white rounded-lg hover:bg-blue-950 p-2 rounded-lg hover:bg-blue-300"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
