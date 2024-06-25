import { convertToReal } from "@/lib/utils";

interface Props {
  image: string;
  title: string;
  price: number;
  description: string;
}

export function SectionCard({ image, description, price, title }: Props) {
  return (
    <div className='p-1 flex flex-col gap-4 items-start justify-center max-w-72'>
      <img
        src={image}
        alt=''
        className='w-44 rounded-lg self-center'
      />
      <h1 className='text-lg font-bold break-words'>{title}</h1>
      {/* <span className='text-sm text-muted-foreground'>
                {description}
              </span> */}
      <div className='font-secondary text-gray-900 font-medium text-sm flex gap-2 items-end w-full justify-start'>
        <span className='font-light text-lg'>{convertToReal(price)}</span>
        <span className='mb-1'>ou 10x de {convertToReal(price / 10)}</span>
      </div>
    </div>
  );
}
