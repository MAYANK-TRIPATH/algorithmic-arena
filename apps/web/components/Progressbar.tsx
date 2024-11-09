import { Line } from 'rc-progress';

const ProgressBarWithStatus = () => {
  const percentComplete = 25; 
  const statusText = 'Completed 5/50'; 

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#F1F5F9] dark:bg-[#0F172A] border-[#E2E8F0] dark:border-[#1E293B] rounded-md shadow-md mx-auto w-[calc(100%-2rem)] sm:w-auto max-w-[1000px]">
      {/* Left Side - Progress Label and Percentage */}
      <div className="w-full sm:w-4/5 flex items-center space-x-2 text-left text-sm font-semibold">
        <span className="whitespace-nowrap">Progress</span>
        <div className="mx-4 relative min-w-[100px]">
          <Line
            percent={percentComplete}
            strokeWidth={4}
            strokeColor="#4CAF50"
            trailColor="#D3D3D3"
            className="h-2 rounded-md"
          />
        </div>
        <span className="whitespace-nowrap">{percentComplete}%</span> 
      </div>

      {/* Status Text */}
      <div className="text-right text-sm mt-2 sm:mt-0 font-semibold whitespace-nowrap">
        {statusText}
      </div>
    </div>
  );
};

export default ProgressBarWithStatus;
