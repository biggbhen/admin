import React from 'react';
import foodImg from '../assets/food-image.svg';
import thumbsUp from '../assets/thumbs-up.svg';

const ProductCard = ({ item }) => {
	return (
		<div
			key={item.id}
			className=' border-[.5px] border-[#D9DCE2] flex justify-between p-[1rem]  items-center rounded-[.4rem]  '>
			<div className=' w-[12.5rem]'>
				<h4 className=' font-bold '>{item.title}</h4>
				<p className='text-[0.87rem] text-[#858D9D]'>{item.description}</p>
				<div className=' flex items-center justify-between w-[10rem] '>
					<img src={thumbsUp} alt='thumbsUp' />
					<span className='text-[0.87rem] text-[#2B2F38] font-semibold'>
						{item.pecentage}
					</span>
					<span className='text-[#48505E] font-extrabold mt-[-.4rem] '>
						{' '}
						.{' '}
					</span>
					<span className='text-[#EE2024] line-through text-[0.87rem] font-semibold '>
						{' '}
						{item.discountedPrice}
					</span>
					<span className='text-[0.87rem] text-[#2B2F38] font-semibold '>
						{item.price}
					</span>
				</div>
			</div>
			<div>
				<img src={foodImg} alt='foodImg' />
			</div>
		</div>
	);
};

export default ProductCard;
