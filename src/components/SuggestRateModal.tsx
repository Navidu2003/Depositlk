"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { AccountType } from "@/types";

interface SuggestRateModalProps {
  bankName: string;
  bankSlug: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function SuggestRateModal({
  bankName,
  bankSlug,
  isOpen,
  onClose,
}: SuggestRateModalProps) {
  const [accountType, setAccountType] = useState<AccountType>("FD");
  const [proposedRate, setProposedRate] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/suggest-rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bankSlug,
          accountType,
          proposedRate: parseFloat(proposedRate),
          sourceUrl: sourceUrl || undefined,
          userEmail: userEmail || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit rate suggestion.");
      }

      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setProposedRate("");
        setSourceUrl("");
        setUserEmail("");
      }, 2000);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-xl max-w-lg w-full p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4A4A47] hover:text-[#1F4E5F] p-1 rounded-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-[#1F4E5F]">Suggest Rate Update</h3>
        <p className="text-xs text-[#4A4A47] mt-1 mb-5">
          Help keep <span className="font-semibold text-[#1F4E5F]">{bankName}</span> data accurate for all depositors.
        </p>

        {status === "success" ? (
          <div className="p-6 bg-[#EAF1EE] border border-[#2E7D6B]/30 rounded-lg flex flex-col items-center text-center">
            <CheckCircle2 className="w-10 h-10 text-[#2E7D6B] mb-2" />
            <h4 className="text-base font-bold text-[#1F4E5F]">Suggestion Received</h4>
            <p className="text-xs text-[#4A4A47] mt-1">
              Thank you for contributing! Our verification pipeline will review this submission.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === "error" && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#1F4E5F] mb-1">
                Account Type
              </label>
              <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value as AccountType)}
                className="w-full p-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm text-[#1F4E5F] focus:ring-2 focus:ring-[#2E7D6B] outline-none"
              >
                <option value="FD">Fixed Deposit (FD)</option>
                <option value="RD">Recurring Deposit (RD)</option>
                <option value="Savings">Savings Account</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1F4E5F] mb-1">
                Verified Annual Interest Rate (% p.a.) *
              </label>
              <input
                type="number"
                step="0.01"
                min="0.1"
                max="50"
                required
                placeholder="e.g. 11.75"
                value={proposedRate}
                onChange={(e) => setProposedRate(e.target.value)}
                className="w-full p-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm text-[#1F4E5F] focus:ring-2 focus:ring-[#2E7D6B] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1F4E5F] mb-1">
                Official Source Link (Optional)
              </label>
              <input
                type="url"
                placeholder="https://bank.lk/rates-sheet"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                className="w-full p-2.5 bg-white border border-[#DADAD3] rounded-lg text-sm text-[#1F4E5F] focus:ring-2 focus:ring-[#2E7D6B] outline-none"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 border border-[#DADAD3] rounded-lg text-xs font-semibold text-[#4A4A47] hover:bg-[#EAF1EE]/50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-2.5 bg-[#1F4E5F] text-white rounded-lg text-xs font-semibold hover:bg-[#163845] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Submitting..." : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Submit Rate
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}