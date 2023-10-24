import Link from "next/link";
import Image from "next/image";
import { BasicModal } from "@/components/BasicModal";
import { NewDatabase } from "@/components/NewDatabase";
import { InsertDocument } from "@/components/InsertDocument";
import { Icons } from "@/components/Icons";
import { NavButton } from "@/components/NavButton";
type Props = {
  searchParams: Record<string, string> | null | undefined;
};
export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.newDatabaseModal;
  return (
    <>
      <div className="flex flex-col items-start gap-6 mt-6">
        <div className="relative flex items-start self-stretch w-full gap-6 ">
          <div className="relative flex-1 mt-[-1.00px] font-title font-[number:var(--title-font-weight)] text-colors-body-primary text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
            Orochi’s space
          </div>
          <div className="inline-flex items-center gap-[8px] relative ">
            <div className="relative inline-flex items-start ">
              <NavButton
                className=""
                icon={<Icons.Column className="!relative w-5 h-5" />}
                status="default"
                hasText={false}
              />
              <NavButton
                className=""
                icon={<Icons.Grid className="!relative w-5 h-5" />}
                status="default"
                hasText={false}
              />
            </div>
            <div className="relative w-px h-[16px] bg-colors-body-secondary rounded-[8px]" />
            <NavButton
              className=""
              icon={<Icons.Recent className="!relative w-5 h-5" />}
              status="default"
              text="Most recent"
              hasText={true}
            />
          </div>
        </div>
        <div className="flex items-start gap-[15px] relative self-stretch w-full">
          <div className="border-[1.5px] border-solid border-colors-dividers w-[358px] flex items-center gap-[12px] p-[12px] rounded-[10px] relative">
            <Icons.NewDatabase className="w-5 h-5" />
            <div className="relative flex flex-col items-start flex-1 grow">
              <div className="!font-nunito self-stretch mt-[-1.00px] tracking-[0] text-[14px] text-[#192431] font-semibold leading-[normal] relative">
                New Database
              </div>
              <div className="!font-quicksand self-stretch tracking-[0] text-[10px] text-colors-body-secondary font-semibold leading-[normal] relative">
                <p>Create or import new data</p>
              </div>
            </div>
          </div>
          <div className="border-[1.5px] border-solid border-colors-dividers w-[358px] flex items-center gap-[12px] p-[12px] rounded-[10px] relative">
            <Icons.NewQuery className="w-5 h-5" />
            <div className="relative flex flex-col items-start flex-1 grow">
              <div className="!font-nunito self-stretch mt-[-1.00px] tracking-[0] text-[14px] text-[#192431] font-semibold leading-[normal] relative">
                New Query
              </div>
              <div className="!font-quicksand self-stretch tracking-[0] text-[10px] text-colors-body-secondary font-semibold leading-[normal] relative">
                <p>Start saving your aggregations</p>
              </div>
            </div>
          </div>
          <div className="border-[1.5px] border-solid border-colors-dividers w-[358px] flex items-center gap-[12px] p-[12px] rounded-[10px] relative">
            <Icons.Template className="w-5 h-5 " />
            <div className="relative flex flex-col items-start flex-1 grow">
              <div className="!font-nunito self-stretch mt-[-1.00px] tracking-[0] text-[14px] text-[#192431] font-semibold leading-[normal] relative">
                Templates
              </div>
              <div className="!font-quicksand self-stretch tracking-[0] text-[10px] text-colors-body-secondary font-semibold leading-[normal] relative">
                <p>Browse and pick a template</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start shadow-[0px_0px_12px_1px_#1924310a] p-[24px] relative  flex-col rounded-[18px] gap-[24px] bg-white overflow-hidden">
          <>
            <div className="font-section-title self-stretch tracking-[var(--section-title-letter-spacing)] text-[length:var(--section-title-font-size)] [font-style:var(--section-title-font-style)] flex-1 font-[number:var(--section-title-font-weight)] leading-[var(--section-title-line-height)] relative">
              admin
            </div>
            <div className="w-full flex self-stretch items-start gap-[64px]  relative">
              <div className="relative flex flex-col items-start flex-1 grow">
                <div className="font-body-highlight self-stretch mt-[-1.00px] tracking-[var(--body-highlight-letter-spacing)] text-[length:var(--body-highlight-font-size)] [font-style:var(--body-highlight-font-style)] text-colors-body-primary font-[number:var(--body-highlight-font-weight)] leading-[var(--body-highlight-line-height)] relative">
                  Storage size
                </div>
                <div className="font-body self-stretch tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)] text-[length:var(--body-font-size)] text-colors-body-primary font-[number:var(--body-font-weight)] leading-[var(--body-line-height)] relative">
                  0 B
                </div>
              </div>
              <div className="relative flex flex-col items-start flex-1 grow">
                <div className="font-body-highlight self-stretch mt-[-1.00px] tracking-[var(--body-highlight-letter-spacing)] text-[length:var(--body-highlight-font-size)] [font-style:var(--body-highlight-font-style)] text-colors-body-primary font-[number:var(--body-highlight-font-weight)] leading-[var(--body-highlight-line-height)] relative">
                  Collections
                </div>
                <div className="font-body self-stretch tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)] text-[length:var(--body-font-size)] text-colors-body-primary font-[number:var(--body-font-weight)] leading-[var(--body-line-height)] relative">
                  0 B
                </div>
              </div>
              <div className="relative flex flex-col items-start flex-1 grow">
                <div className="font-body-highlight self-stretch mt-[-1.00px] tracking-[var(--body-highlight-letter-spacing)] text-[length:var(--body-highlight-font-size)] [font-style:var(--body-highlight-font-style)] text-colors-body-primary font-[number:var(--body-highlight-font-weight)] leading-[var(--body-highlight-line-height)] relative">
                  Indexes
                </div>
                <div className="font-body self-stretch tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)] text-[length:var(--body-font-size)] text-colors-body-primary font-[number:var(--body-font-weight)] leading-[var(--body-line-height)] relative">
                  0
                </div>
              </div>
            </div>
            <Icons.dBIcon className="absolute !w-[32px] !h-[32px] !top-[24px] !left-[1048px]" />
          </>
        </div>
        {/* <div className="flex items-start shadow-[0px_0px_12px_1px_#1924310a] p-[24px] relative w-[1056px] flex-col rounded-[18px] gap-[24px] bg-white overflow-hidden">
          <>
            <div className="w-full flex self-stretch flex-col items-start gap-[4px]  relative">
              <div className="inline-flex items-center gap-[8px] px-[8px] py-[4px] h-[24px] rounded-[4px] relative !bg-colors-dividers ">
                <div className="font-informative-caption tracking-[var(--informative-caption-letter-spacing)] [font-style:var(--informative-caption-font-style)] text-[length:var(--informative-caption-font-size)] relative font-[number:var(--informative-caption-font-weight)] whitespace-nowrap leading-[var(--informative-caption-line-height)] !mt-[-5.00px] !text-colors-body-primary !mb-[-3.00px] !flex-1 ![font-family:'Nunito',Helvetica] !w-[unset]">
                  .FIND
                </div>
              </div>
              <div className="font-section-title self-stretch tracking-[var(--section-title-letter-spacing)] [font-style:var(--section-title-font-style)] text-[length:var(--section-title-font-size)] flex-1 font-[number:var(--section-title-font-weight)] leading-[var(--section-title-line-height)] relative">
                Swords
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[16px]  relative">
              <div className="inline-flex items-start gap-[4px]  relative">
                <Icons.DB
                  className="!relative w-5 h-5"
                  color="#192431"
                />
                <div className="[font-family:'Nunito',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] text-colors-body-primary font-medium leading-[normal] relative">
                  sample_game
                </div>
              </div>
              <div className="inline-flex items-start gap-[4px]  relative">
                <Icons.Folder className="!relative w-5 h-5" />
                <div className="[font-family:'Nunito',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] text-colors-body-primary font-medium leading-[normal] relative">
                  weapons
                </div>
              </div>
            </div>
            <p className="[font-family:'Quicksand',Helvetica] w-fit tracking-[0] text-[10px] text-colors-body-secondary font-semibold leading-[normal] relative">
              Last modified 1 hour ago
            </p>
            <Icons.curlyIcon className="!w-[32px] !h-[32px] !top-[24px] !left-[1048px]" />
          </>
        </div> */}
      </div>
      {showModal && <NewDatabase />}
    </>
  );
}
