import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProfileHeader from "@/components/profileheader";
import SkillsSection from "@/components/skillsection";
import ReviewSection from "@/components/reviewsection";

export default function Config() {
    return (
        <>
            <Navbar />
                <div className="flex flex-row w-full pt-12">
                    <div className="flex basis-7/10 flex-col pl-35">
                        <article className="flex flex-col items-start rounded-none max-w-[855px]">
                            <div className="ml-6 max-w-full w-[461px]">
                                <ProfileHeader />
                                <SkillsSection />
                            </div>
                            <hr className="self-stretch mt-6 w-full border border-solid border-neutral-400 min-h-px max-md:max-w-full" />
                            <ReviewSection />
                        </article>
                    </div>
                    <div className="flex basis-3/8 flex-col px-15">
                    </div>
                </div>
            <Footer />
        </>
    );
}