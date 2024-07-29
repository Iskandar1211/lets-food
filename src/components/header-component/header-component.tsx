import React from 'react';
import NavbarComponent from "@/components/navbar-component/navbar-component";
import {Button} from "@/components/ui/button";
import Image from "next/image";


const HeaderComponent = () => {
    return (
        <div className={'bg-[#FFF9EA] relative'}>
            <NavbarComponent/>
            <div className={'container mx-auto grid grid-cols-2 gap-12'}>
                <div className={'self-center'}>
                    <p className={'font-semibold text-[#000000] text-5xl mb-[21px]'}>Be The Fastest In <br/> Delivery
                        Your <span className={'text-[#FFCB45]'}>Food</span></p>
                    <p className={'text-[#1D1D1DB2] font-normal text-lg mb-[23px]'}>Lorem ipsum dolor sit amet,
                        consectetur <br/> adipiscing elit ut aliquam, purus sit amet</p>
                    <Button>Get Started</Button>
                </div>
                <div className={'relative flex flex-col'}>
                    <Image src={'/images/food1.png'} alt={'food-1'} width={343} height={338} className={'self-center'}/>
                    <div className={'flex items-center'}>
                        <Image src={'/images/food2.png'} alt={'food-2'} width={202} height={200}
                               className={'relative -top-20 -right-16'}/>
                        <Image src={'/images/food3.png'} alt={'food-3'} width={275} height={262}
                               className={'relative -right-20 -top-4'}/>
                    </div>
                    <div className={'absolute top-10 left-6 w-[54px] h-[54px] bg-[#FFAC4B] rounded-full'}></div>
                    <div className={'absolute top-[249px] left-10 w-[19px] h-[19px] bg-[#FFAC4B] rounded-full'}></div>
                    <div className={'absolute top-[249px] right-4 w-[74px] h-[74px] bg-[#FFAC4B] rounded-full'}></div>
                    <div className={'absolute bottom-24 -left-9 w-[41px] h-[41px] bg-[#FFAC4B] rounded-full'}></div>
                </div>
            </div>
            <Image src={'/icons/header-rectangle.svg'} alt={'header-rectangle'} width={179} height={37}
                   className={'absolute bottom-[73px]'}/>
            <Image src={'/icons/header-rectangle.svg'} alt={'header-rectangle'} width={179} height={37}
                   className={'absolute bottom-9'}/>
        </div>
    );
};

export default HeaderComponent;