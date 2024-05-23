import Image from 'next/image';
import React from 'react';

import { FormatTitleString } from '@/lib/formats/format-title-string';

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';

interface Props {
	image: string;
	nama?: string;
	jabatan: string;
}

export const DataCard = ({ image, nama, jabatan }: Props) => {
	return (
		<Card className="flex flex-col justify-between shadow-md">
			<CardHeader className="relative w-full bg-red-300 h-40 rounded-lg">
				<Image src={image} fill className="object-contain" alt="foto" />
			</CardHeader>
			<CardContent className="text-center font-[500] mt-3 flex items-center justify-center h-16">
				{nama ? FormatTitleString(nama) : '-'}
			</CardContent>
			<CardFooter className="flex items-center justify-center h-8 text-gray-400 font-[500] text-center">
				{jabatan}
			</CardFooter>
		</Card>
	);
};
