"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Ingatlan = {
  id: number;
  category: string;
  seller: string;
  description: string;
  createAt: string;
  imageUrl: string;
};

export default function RealEstateApp() {
const [ingatlanok, setIngatlanok] = useState<Ingatlan[]>([]);
  const [formData, setFormData] = useState({
    kategoria: "",
    elado: "",
    leiras: "",
    hirdetesDatuma: "",
    tehermentes: false,
    kepUrl: "",
    terulet: "",
    szobak: "",
    emeletek: "",
    koordinatak: ""
  });

  const fetchIngatlanok = async () => {
    const res = await fetch("http://localhost:3000/api/ingatlan");
    const data = await res.json();
    setIngatlanok(data);
  };

  useEffect(() => {
    fetchIngatlanok();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/api/ingatlan/${id}`, {
      method: "DELETE",
    });
    fetchIngatlanok();
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/ujingatlan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    setFormData({
      kategoria: "",
      elado: "",
      leiras: "",
      hirdetesDatuma: "",
      tehermentes: false,
      kepUrl: "",
      terulet: "",
      szobak: "",
      emeletek: "",
      koordinatak: ""
    });
    fetchIngatlanok();
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">🏠 Ingatlan kezelő</h1>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">➕ Új ingatlan hozzáadása</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <Label htmlFor={key}>{key}</Label>
                {typeof value === "boolean" ? (
                  <input
                    type="checkbox"
                    id={key}
                    checked={value}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })}
                  />
                ) : (
                  <Input
                    id={key}
                    value={value}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  />
                )}
              </div>
            ))}
            <Button type="submit">Mentés</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">📋 Ingatlan lista</h2>
          <table className="w-full table-auto border">
            <thead>
              <tr>
                <th className="border px-2">#</th>
                <th className="border px-2">Kategória</th>
                <th className="border px-2">Eladó</th>
                <th className="border px-2">Leírás</th>
                <th className="border px-2">Dátum</th>
                <th className="border px-2">Kép</th>
                <th className="border px-2">Törlés</th>
              </tr>
            </thead>
            <tbody>
              {ingatlanok.map((i) => (
                <tr key={i.id} className="border">
                  <td className="border px-2">{i.id}</td>
                  <td className="border px-2">{i.category}</td>
                  <td className="border px-2">{i.seller}</td>
                  <td className="border px-2">{i.description}</td>
                  <td className="border px-2">{i.createAt}</td>
                  <td className="border px-2">
                    <img src={i.imageUrl} alt="ingatlan" className="w-16 h-16 object-cover" />
                  </td>
                  <td className="border px-2">
                    <Button onClick={() => handleDelete(i.id)} variant="destructive">
                      Törlés
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
