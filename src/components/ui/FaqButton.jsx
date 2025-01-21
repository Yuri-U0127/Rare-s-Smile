import Link from "next/link";

export default function FaqButton() {
  return (
    <Link href={'/faq'}>
      <div className="flex w-[146px] justify-between cursor-pointer	" >
        <img src="/images/help.svg" />
        <span>よくあるご質問</span>
      </div>
    </Link>
  )
}