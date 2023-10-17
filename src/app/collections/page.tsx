import Link from "next/link";
import Image from "next/image";
import { BasicModal } from "@/components/BasicModal";
import { NewDatabase } from "@/components/NewDatabase";
import { InsertDocument } from "@/components/InsertDocument";
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
              game.characters
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
          {/* <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <QuickActions
              className="!flex-1 !grow !w-[unset]"
              property1="frame-35"
            />
            <QuickActions
              className="!flex-1 !grow !w-[unset]"
              property1="frame-36"
            />
            <QuickActions
              className="!flex-1 !grow !w-[unset]"
              property1="frame-37"
            />
          </div>
          <Cards className="!flex-[0_0_auto]" hover={false} type="database" />
          <Cards className="!flex-[0_0_auto]" hover={false} type="query" /> */}
        </div>
      </div>

      {showModal && <NewDatabase />}
    </>
  );
}
