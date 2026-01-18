"use client";

import { XIcon, UploadIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint?: "postImage"; // Keep for backward compatibility, but not used
}

function ImageUpload({ onChange, value }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Validate file size (4MB)
    if (file.size > 4 * 1024 * 1024) {
      alert("File size must be less than 4MB");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      onChange(data.url);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  if (value) {
    return (
      <div className="relative size-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }

  return (
    <div className="border-2 border-dashed rounded-lg p-6 text-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="cursor-pointer flex flex-col items-center justify-center space-y-2"
      >
        <UploadIcon className="h-8 w-8 text-muted-foreground" />
        <div className="text-sm text-muted-foreground">
          {uploading ? "Uploading..." : "Click to upload or drag and drop"}
        </div>
        <div className="text-xs text-muted-foreground">PNG, JPG up to 4MB</div>
      </label>
    </div>
  );
}

export default ImageUpload;