"use client"; 

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


export default function OverviewCard() {
    // Calculate progress percentages
    // we will make this dynamic
    const easySolved = 10;
    const mediumSolved = 15;
    const hardSolved = 12;
    const easyTotal = 25;
    const mediumTotal = 25;
    const hardTotal = 20;

    const easyProgress = (easySolved / easyTotal) * 100;  // Example: 10 solved out of 25
    const mediumProgress = (mediumSolved / mediumTotal) * 100; 
    const hardProgress = (hardSolved / hardTotal) * 100;   

    // Calculate total solved questions
    const totalSolved = easySolved + mediumSolved + hardSolved;

    return (
        <div className="flex flex-col gap-4 p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#020817] shadow-md w-[440px] h-[336px] border border-[#E2E8F0] dark:border-[#1E293B]">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Problem-Solving Overview</div>
            </div>

            {/* Main Content with Circular Progress Bars and Solved Cards */}
            <div className="flex gap-4 h-[260px] w-[408px]">
                {/* Circular Progress Bar Section */}
                <div className="relative flex items-center justify-center mt-12" style={{ height: "180px", width: "180px" }}>
                    {/* Hard Progress (Largest Circle) */}
                    <div style={{ position: 'absolute', width: '180px', height: '180px' }}>
                        <CircularProgressbar
                            value={hardProgress}
                            styles={buildStyles({
                                pathColor: '#DD503F', // Red color for hard
                                trailColor: 'rgba(189, 189, 189, 0.4)', // Gray trail for unhighlighted section
                            })}
                            strokeWidth={5} // Adjust thickness
                        />
                    </div>
                    
                    {/* Medium Progress (Middle Circle) */}
                    <div style={{ position: 'absolute', width: '150px', height: '150px' }}>
                        <CircularProgressbar
                            value={mediumProgress}
                            styles={buildStyles({
                                pathColor: '#FB923C', // Orange color for medium
                                trailColor: 'rgba(189, 189, 189, 0.4)', // Gray trail for unhighlighted section
                            })}
                            strokeWidth={5} // Adjust thickness
                        />
                    </div>
                    
                    {/* Easy Progress (Smallest Circle) */}
                    <div style={{ position: 'absolute', width: '120px', height: '120px' }}>
                        <CircularProgressbar
                            value={easyProgress}
                            styles={buildStyles({
                                pathColor: '#3D9C5C', // Green color for easy
                                trailColor: 'rgba(189, 189, 189, 0.4)', // Gray trail for unhighlighted section
                            })}
                            strokeWidth={5} // Adjust thickness
                        />
                    </div>

                    {/* Center Text for Total Solved Questions */}
                    <div className="absolute text-center text-xl font-bold text-gray-800 dark:text-gray-200">
                        {totalSolved} <br/> Solved
                    </div>
                </div>

                {/* Solved Problem Cards Section */}
                <div className="flex-1 flex flex-col gap-4 h-[210px] w-[232px] mt-8">
                    {/* First Problem Solved card */}
                    <div className="bg-[#F1F5F9] dark:bg-[#0F172A] rounded-lg p-2 flex flex-col gap-2 w-[231px] h-[62px]">
                        <div className="text-md text-green-500 ml-20 mr-20">Easy</div>
                        <div className="ml-[70px] mt-[-8px] text-lg">{easySolved}/{easyTotal}</div>
                    </div>

                    {/* Second Problem Solved card */}
                    <div className="bg-[#F1F5F9] dark:bg-[#0F172A] rounded-lg p-2 flex flex-col gap-2 w-[231px] h-[62px]">
                        <div className="text-md text-orange-500 ml-16 mr-16">Medium</div>
                        <div className="ml-[70px] mt-[-8px] text-lg">{mediumSolved}/{mediumTotal}</div>
                    </div>

                    {/* Third Problem Solved card */}
                    <div className="bg-[#F1F5F9] dark:bg-[#0F172A] rounded-lg p-2 flex flex-col gap-2 w-[231px] h-[62px]">
                        <div className="text-md text-red-500 ml-20 mr-20">Hard</div>
                        <div className="ml-[70px] mt-[-8px] text-lg">{hardSolved}/{hardTotal}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}