//IN CHARGE: CERIL

// CHANGE TO CARD:
//       Card Name (Target body parts pls refer to cerils screenshots sa gc)
//       Duration (in days) :: Total Minutes
//       Set of Workouts
//       Description for Each Workout

import TrainerProfile from "../assets/trainer.jpeg";

function DropdownComponent() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mt-5 w-24 h-24 mb-3 rounded-full shadow-lg"
          src={TrainerProfile}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Breast Workout
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          7x4 Challenge
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Choose
          </a>
        </div>
      </div>
    </div>
  );
}

export default DropdownComponent;
