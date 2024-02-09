import React from "react";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useForm } from "react-hook-form";

function Postform() {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: "",
      },
    });
  return <></>;
}

export default Postform;
