import React, { useState } from "react";
import { AddressCard,AddressContainer } from "./Address.styles";
import { Plus, X } from "lucide-react";
import { MdEdit } from "react-icons/md";

const addresses = [
    {
        id: 1,
        label: "2118 Thornridge",
        type: "HOME",
        details: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
        phone: "(209) 555-0104",
    },
    {
        id: 2,
        label: "Headoffice",
        type: "OFFICE",
        details: "2715 Ash Dr. San Jose, South Dakota 83475",
        phone: "(704) 555-0127",
    },
];


export const Address = () => {
    const [selected, setSelected] = useState(1);

    return (
        <AddressContainer>
            <h2 className="text-lg font-semibold mb-4 text-left">Select Address</h2>
            {addresses.map((address) => (
                <AddressCard key={address.id}>
                    <label className="flex cursor-pointer">

                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <input
                                    type="radio"
                                    name="address"
                                    checked={selected === address.id}
                                    onChange={() => setSelected(address.id)}
                                />
                                <span className="font-semibold">{address.label}</span>
                                <span className="badge">{address.type}</span>
                            </div>
                            <div className="ml-[1.25rem]">
                                <div className="text-sm text-gray-500 text-left">{address.details}</div>
                                <div className="text-sm text-gray-500 text-left">{address.phone}</div>
                            </div>

                        </div>
                    </label>
                    <div className="flex gap-[8px]">
                        <div className="p-[4px] cursor-pointer"><MdEdit /></div>
                        <div className="cursor-pointer"><X /></div>
                    </div>
                </AddressCard>
            ))}

            <div className="flex items-center">
                <div className="flex-1 border-2 border-gray border-dashed"></div>
                <button className="rounded-[50%] bg-black"><Plus className="text-white" /></button>
                <div className="flex-1 border-2 border-gray border-dashed"></div>
            </div>
            <div>Add New Address</div>
        </AddressContainer>
    );
};
