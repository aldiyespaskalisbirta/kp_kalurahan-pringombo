import Link from 'next/link';

import { IoMdArrowRoundBack } from 'react-icons/io';

import { getPendudukById } from '@/actions/penduduk/penduduk-actions';

import { EditAgama } from '@/components/penduduk/edit/edit-agama';
import { EditGolDarah } from '@/components/penduduk/edit/edit-gol-darah';
import { EditJenisKelamin } from '@/components/penduduk/edit/edit-jenis-kelamin';
import { EditNama } from '@/components/penduduk/edit/edit-nama';
import { EditNamaAyah } from '@/components/penduduk/edit/edit-nama-ayah';
import { EditNamaIbu } from '@/components/penduduk/edit/edit-nama-ibu';
import { EditNik } from '@/components/penduduk/edit/edit-nik';
import { EditNokk } from '@/components/penduduk/edit/edit-nokk';

type Props = {
	params: {
		nik: string;
	};
};

export default async function EditDataPendudukPage({ params }: Props) {
	const penduduk = await getPendudukById(params.nik);
	const dataPenduduk = penduduk.data;
	if (!dataPenduduk) {
		return null;
	}
	return (
		<>
			<div className="p-6">
				<div className="flex items-center justify-between">
					<div className="w-full">
						<Link
							href="/penduduk/[nik]"
							as={`/penduduk/${dataPenduduk.nik}`}
							prefetch={true}
							className="w-fit p-2 flex items-center test-sm hover:opacity-75 trasition mb-6"
						>
							<IoMdArrowRoundBack className="h-4 w-4 mr-2" />
							Kembali
						</Link>
						<div className="flex items-center justify-between w-full">
							<div className="flex flex-col gap-y-2">
								<h1 className="text-2xl font-medium">
									Edit Data{' '}
									<span className="text-sky-700 font-semibold">
										{atob(dataPenduduk.nik)}
									</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-8 mx-8 pb-12">
				<EditNik initialData={dataPenduduk} nik={dataPenduduk.nik} />
				<EditNokk initialData={dataPenduduk} nik={dataPenduduk.nik} />
				<EditNama initialData={dataPenduduk} nik={dataPenduduk.nik} />
				{/* <EditNamaPanggilan initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				<EditJenisKelamin initialData={dataPenduduk} nik={dataPenduduk.nik} />
				<EditAgama initialData={dataPenduduk} nik={dataPenduduk.nik} />
				{/* <EditTanggalLahir initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				{/* <EditTempatLahir initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				{/* <EditPadukuhan initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				{/* <EditRt initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				{/* <EditRw initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				{/* <EditPendidikanKk initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				{/* <EditPendidikanSdt initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				{/* <EditPekerjaan initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				{/* <EditStatusKawin initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				{/* <EditShdk initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
				<EditGolDarah initialData={dataPenduduk} nik={dataPenduduk.nik} />
				<EditNamaAyah initialData={dataPenduduk} nik={dataPenduduk.nik} />
				<EditNamaIbu initialData={dataPenduduk} nik={dataPenduduk.nik} />
				{/* <EditStatusDuk initialData={dataPenduduk} nik={dataPenduduk.nik} /> */}
			</div>
		</>
	);
}
