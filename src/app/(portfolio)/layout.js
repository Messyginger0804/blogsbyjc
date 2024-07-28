import InsightBanner from "@/components/About/InsightBanner";




const insights = [
    "12+ Projects Completed 📄",
    "10+ Years of Management Experience 💼",
    "Experienced Freelance Developer 💻",
    "Funny Guy 😜",
    "Blogger 📝",
    "Volunteer for Dallas Software Developer 🌐",
    "UTD Alumni 🎓",
];

export default function AboutLayout({ children }) {
    return (
        <main className="w-full flex flex-col items-center justify-between">
            <InsightBanner insights={insights} />
            {children}
        </main>
    );
}