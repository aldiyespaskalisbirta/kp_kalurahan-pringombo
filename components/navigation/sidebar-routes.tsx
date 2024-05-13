'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export const SidebarRoutes = () => {
	return (
		<div className="flex flex-col w-full">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1" className="w-full pl-6">
					<AccordionTrigger className="hover:underline-offset-0 hover:no-underline text-sm">
						Profil Kalurahan
					</AccordionTrigger>
					<AccordionContent className="flex flex-col space-y-2">
						<Link
							href="/profil-kalurahan/tentang-kami"
							className="pl-4 hover:text-sky-700"
						>
							Tentang kami
						</Link>
						<Link
							href="/profil-kalurahan/visi-misi"
							className="pl-4 hover:text-sky-700"
						>
							Visi & Misi
						</Link>
						<Link
							href="/profil-kalurahan/sejarah-kalurahan"
							className="pl-4 hover:text-sky-700"
						>
							Sejarah Kalurahan
						</Link>
						<Link
							href="/profil-kalurahan/geografis-kalurahan"
							className="pl-4 hover:text-sky-700"
						>
							Geografis Kalurahan
						</Link>
						<Link
							href="/profil-kalurahan/demografi-kalurahan"
							className="pl-4 hover:text-sky-700"
						>
							Demografi Kalurahan
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1" className="w-full pl-6">
					<AccordionTrigger className="hover:underline-offset-0 hover:no-underline text-sm">
						Pemerintahan
					</AccordionTrigger>
					<AccordionContent className="flex flex-col space-y-2">
						<Link
							href="/pemerintahan/struktur-organisasi"
							className="pl-4 hover:text-sky-700"
						>
							Struktur Organisasi
						</Link>
						<Link
							href="/pemerintahan/perangkat-kalurahan"
							className="pl-4 hover:text-sky-700"
						>
							Perangkat Kalurahan
						</Link>
						<Link
							href="/pemerintahan/lembaga-kalurahan"
							className="pl-4 hover:text-sky-700"
						>
							Lembaga Kalurahan
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1" className="w-full pl-6">
					<AccordionTrigger className="hover:underline-offset-0 hover:no-underline text-sm">
						Informasi
					</AccordionTrigger>
					<AccordionContent className="flex flex-col space-y-2">
						<Link href="/" className="pl-4 hover:text-sky-700">
							Berita
						</Link>
						<Link href="/" className="pl-4 hover:text-sky-700">
							Pengumuman
						</Link>
						<Link href="/" className="pl-4 hover:text-sky-700">
							Agenda Kegiatan
						</Link>
						<Link href="/" className="pl-4 hover:text-sky-700">
							Galeri
						</Link>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};