"use client";

import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

import { Pencil } from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Penduduk } from "@prisma/client";
import { editDataPenduduk } from "@/actions/penduduk/penduduk-actions";

interface Props {
  initialData: Penduduk;
  nik: string;
}
const formSchema = z.object({
  rt: z.coerce.number(),
});

export const EditRt = ({ initialData, nik }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rt: initialData.rt || undefined,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      //   await axios.patch(`/api/penduduk/${nik}`, values);
      //   toast.success("RT berhasil diubah");
      //   toggleEdit();
      //   router.refresh();
      values.rt = values.rt;
      startTransition(() => {
        editDataPenduduk(nik, values).then((response) => {
          if (response.data === null) {
            toast.error(response.message);
          } else {
            toast.success(response.message);
            toggleEdit();
            router.refresh();
          }
        });
      });
    } catch {
      toast.error("Gagal mengedit");
    }
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        RT
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Batal</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>
      {!isEditing && <div className={cn("text-sm mt-2", !initialData.rt && "text-slate-500 italic")}>{!initialData.rt ? "Tidak diketahui" : initialData.rt}</div>}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="rt"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" disabled={isSubmitting} placeholder="Masukan nomor RT" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting || isPending} type="submit">
                Simpan
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
