import Link from "next/link";
import Image from "next/image";
import { BasicModal } from "@/components/BasicModal";
import { NewDatabase } from "@/components/NewDatabase";
import { InsertDocument } from "@/components/InsertDocument";
import { Icons } from "@/components/Icons";
type Props = {
  searchParams: Record<string, string> | null | undefined;
};
export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.newDatabaseModal;
  return (
    <>
      <div className="absolute">
        <div className="flex flex-col w-[1104px] items-start gap-[24px] absolute top-0 left-0">
          <div className="flex items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 mt-[-1.00px] font-title font-[number:var(--title-font-weight)] text-colors-body-primary text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
              Orochi’s space
            </div>
            {/* <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <NavButton
                  className="!flex-[0_0_auto]"
                  icon={
                    <PhosphoreIcons15 className="!relative !w-[20px] !h-[20px]" />
                  }
                  status="active"
                  text={false}
                />
                <NavButton
                  className="!flex-[0_0_auto]"
                  icon={
                    <PhosphoreIcons14 className="!relative !w-[20px] !h-[20px]" />
                  }
                  status="default"
                  text={false}
                />
              </div>
              <div className="relative w-px h-[16px] bg-colors-body-secondary rounded-[8px]" />
              <NavButton
                className="!flex-[0_0_auto]"
                icon={
                  <PhosphoreIcons13 className="!relative !w-[20px] !h-[20px]" />
                }
                status="default"
                text1="Most recent"
              />
            </div> */}
          </div>
          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="border-[1.5px] border-solid border-colors-dividers w-[358px] flex items-center gap-[12px] p-[12px] rounded-[10px] relative">
              <Icons.NewDatabase className="!relative !w-[20px] !h-[20px]" />
              <div className="flex flex-col items-start grow flex-1 relative">
                <div className="!font-nunito self-stretch mt-[-1.00px] tracking-[0] text-[14px] text-[#192431] font-semibold leading-[normal] relative">
                  New Database
                </div>
                <div className="!font-quicksand self-stretch tracking-[0] text-[10px] text-colors-body-secondary font-semibold leading-[normal] relative">
                  <p>Create or import new data</p>
                </div>
              </div>
            </div>
            <div className="border-[1.5px] border-solid border-colors-dividers w-[358px] flex items-center gap-[12px] p-[12px] rounded-[10px] relative">
              <Icons.NewQuery className="!relative !w-[20px] !h-[20px]" />
              <div className="flex flex-col items-start grow flex-1 relative">
                <div className="!font-nunito self-stretch mt-[-1.00px] tracking-[0] text-[14px] text-[#192431] font-semibold leading-[normal] relative">
                  New Query
                </div>
                <div className="!font-quicksand self-stretch tracking-[0] text-[10px] text-colors-body-secondary font-semibold leading-[normal] relative">
                  <p>Start saving your aggregations</p>
                </div>
              </div>
            </div>
            <div className="border-[1.5px] border-solid border-colors-dividers w-[358px] flex items-center gap-[12px] p-[12px] rounded-[10px] relative">
              <Icons.Template className="!relative !w-[20px] !h-[20px]" />
              <div className="flex flex-col items-start grow flex-1 relative">
                <div className="!font-nunito self-stretch mt-[-1.00px] tracking-[0] text-[14px] text-[#192431] font-semibold leading-[normal] relative">
                  Templates
                </div>
                <div className="!font-quicksand self-stretch tracking-[0] text-[10px] text-colors-body-secondary font-semibold leading-[normal] relative">
                  <p>Browse and pick a template</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start shadow-[0px_0px_12px_1px_#1924310a] p-[24px] relative w-[1104px] flex-col rounded-[18px] gap-[24px] bg-white overflow-hidden">
            <>
              <div className="font-section-title self-stretch tracking-[var(--section-title-letter-spacing)] text-[length:var(--section-title-font-size)] [font-style:var(--section-title-font-style)] flex-1 font-[number:var(--section-title-font-weight)] leading-[var(--section-title-line-height)] relative">
                admin
              </div>
              <div className="w-full flex self-stretch items-start gap-[64px] flex-[0_0_auto] relative">
                <div className="flex flex-col items-start grow flex-1 relative">
                  <div className="font-body-highlight self-stretch mt-[-1.00px] tracking-[var(--body-highlight-letter-spacing)] text-[length:var(--body-highlight-font-size)] [font-style:var(--body-highlight-font-style)] text-colors-body-primary font-[number:var(--body-highlight-font-weight)] leading-[var(--body-highlight-line-height)] relative">
                    Storage size
                  </div>
                  <div className="font-body self-stretch tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)] text-[length:var(--body-font-size)] text-colors-body-primary font-[number:var(--body-font-weight)] leading-[var(--body-line-height)] relative">
                    0 B
                  </div>
                </div>
                <div className="flex flex-col items-start grow flex-1 relative">
                  <div className="font-body-highlight self-stretch mt-[-1.00px] tracking-[var(--body-highlight-letter-spacing)] text-[length:var(--body-highlight-font-size)] [font-style:var(--body-highlight-font-style)] text-colors-body-primary font-[number:var(--body-highlight-font-weight)] leading-[var(--body-highlight-line-height)] relative">
                    Collections
                  </div>
                  <div className="font-body self-stretch tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)] text-[length:var(--body-font-size)] text-colors-body-primary font-[number:var(--body-font-weight)] leading-[var(--body-line-height)] relative">
                    0 B
                  </div>
                </div>
                <div className="flex flex-col items-start grow flex-1 relative">
                  <div className="font-body-highlight self-stretch mt-[-1.00px] tracking-[var(--body-highlight-letter-spacing)] text-[length:var(--body-highlight-font-size)] [font-style:var(--body-highlight-font-style)] text-colors-body-primary font-[number:var(--body-highlight-font-weight)] leading-[var(--body-highlight-line-height)] relative">
                    Indexes
                  </div>
                  <div className="font-body self-stretch tracking-[var(--body-letter-spacing)] [font-style:var(--body-font-style)] text-[length:var(--body-font-size)] text-colors-body-primary font-[number:var(--body-font-weight)] leading-[var(--body-line-height)] relative">
                    0
                  </div>
                </div>
              </div>
              <Icons.dBIcon className="!absolute !w-[32px] !h-[32px] !top-[24px] !left-[1048px]" />
            </>
          </div>
          <div className="flex items-start shadow-[0px_0px_12px_1px_#1924310a] p-[24px] relative w-[1104px] flex-col rounded-[18px] gap-[24px] bg-white overflow-hidden">
            <>
              <>
                <div className="w-full flex self-stretch flex-col items-start gap-[4px] flex-[0_0_auto] relative">
                  {/* <Tag
              className="!bg-colors-dividers"
              color="gray"
              divClassName="!mt-[-5.00px] !text-colors-body-primary !tracking-[0] !text-[12px] !mb-[-3.00px] !flex-1 ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[24px] !w-[unset]"
              text=".FIND"
            /> */}
                  <div className="font-section-title self-stretch tracking-[var(--section-title-letter-spacing)] [font-style:var(--section-title-font-style)] text-[length:var(--section-title-font-size)] flex-1 font-[number:var(--section-title-font-weight)] leading-[var(--section-title-line-height)] relative">
                    Swords
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[16px] flex-[0_0_auto] relative">
                  <div className="inline-flex items-start gap-[4px] flex-[0_0_auto] relative">
                    <Icons.DB
                      className="!relative !w-[20px] !h-[20px]"
                      color="#192431"
                    />
                    <div className="[font-family:'Nunito',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] text-colors-body-primary font-medium leading-[normal] relative">
                      sample_game
                    </div>
                  </div>
                  <div className="inline-flex items-start gap-[4px] flex-[0_0_auto] relative">
                    <Icons.Folder className="!relative !w-[20px] !h-[20px]" />
                    <div className="[font-family:'Nunito',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] text-colors-body-primary font-medium leading-[normal] relative">
                      weapons
                    </div>
                  </div>
                </div>
                <p className="[font-family:'Quicksand',Helvetica] w-fit tracking-[0] text-[10px] text-colors-body-secondary font-semibold leading-[normal] relative">
                  Last modified 1 hour ago
                </p>
                <Icons.curlyIcon className="!absolute !w-[32px] !h-[32px] !top-[24px] !left-[1048px]" />
              </>
            </>
          </div>
        </div>
      </div>

      {showModal && <NewDatabase />}
    </>
  );
}
