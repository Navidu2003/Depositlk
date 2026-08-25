"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RateSubmission } from "@/lib/rateStore";
import { Check, X, ExternalLink, ShieldCheck, Clock, CheckCircle2, XCircle } from "lucide-react";

export default function AdminDashboardPage() {
  const [submissions, setSubmissions] = useState<RateSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch("/api/suggest-rate");
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.data);
      }
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleAction = async (id: string, status: "approved" | "rejected") => {
    try {
      const res = await fetch("/api/suggest-rate", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status } : item))
        );
      }
    } catch {
      // Handle error
    }
  };

  const pendingCount = submissions.filter((s) => s.status === "pending_review").length;
  const approvedCount = submissions.filter((s) => s.status === "approved").length;

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-[#EAF1EE] text-[#2E7D6B] text-xs font-bold rounded-full border border-[#2E7D6B]/20 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Moderator Portal
            </span>
          </div>
          <h1 className="text-3xl font-bold text-[#1F4E5F] tracking-tight">
            Rate Verification Queue
          </h1>
          <p className="text-sm text-[#4A4A47] mt-1">
            Review community rate submissions and verify against official bank publications.
          </p>
        </div>

        <Link
          href="/"
          className="text-xs font-semibold text-[#2E7D6B] hover:underline self-start sm:self-auto"
        >
          ← Back to Public Site
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-xl p-5">
          <span className="text-xs font-semibold text-[#4A4A47] uppercase tracking-wider block">
            Pending Review
          </span>
          <span className="text-3xl font-bold text-[#D85A30] mt-2 block">{pendingCount}</span>
        </div>

        <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-xl p-5">
          <span className="text-xs font-semibold text-[#4A4A47] uppercase tracking-wider block">
            Approved Submissions
          </span>
          <span className="text-3xl font-bold text-[#2E7D6B] mt-2 block">{approvedCount}</span>
        </div>

        <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-xl p-5">
          <span className="text-xs font-semibold text-[#4A4A47] uppercase tracking-wider block">
            Total Logged
          </span>
          <span className="text-3xl font-bold text-[#1F4E5F] mt-2 block">{submissions.length}</span>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-[#FAF9F5] border border-[#DADAD3] rounded-xl overflow-x-auto shadow-xs">
        {loading ? (
          <div className="p-8 text-center text-sm text-[#4A4A47]">Loading verification queue...</div>
        ) : submissions.length === 0 ? (
          <div className="p-8 text-center text-sm text-[#4A4A47]">No rate suggestions in queue.</div>
        ) : (
          <table className="w-full text-left text-sm border-collapse min-w-[700px]">
            <thead className="bg-[#EAF1EE] border-b border-[#DADAD3] text-[#1F4E5F]">
              <tr>
                <th className="p-4 font-bold">Bank / Institution</th>
                <th className="p-4 font-bold">Account Type</th>
                <th className="p-4 font-bold">Proposed Rate</th>
                <th className="p-4 font-bold">Proof Source</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Moderation Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADAD3]">
              {submissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-[#EAF1EE]/30 transition-colors">
                  <td className="p-4 font-bold text-[#1F4E5F] uppercase">
                    {sub.bankSlug.replace("-", " ")}
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 bg-[#DCEAE4] text-[#2E7D6B] text-xs font-semibold rounded-md">
                      {sub.accountType}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-[#1F4E5F]">{sub.proposedRate.toFixed(2)}% p.a.</td>
                  <td className="p-4 text-xs text-[#4A4A47]">
                    {sub.sourceUrl ? (
                      <a
                        href={sub.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#2E7D6B] hover:underline"
                      >
                        Inspect Link <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[#999990]">None provided</span>
                    )}
                  </td>
                  <td className="p-4">
                    {sub.status === "pending_review" && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D85A30]">
                        <Clock className="w-3.5 h-3.5" /> In Review
                      </span>
                    )}
                    {sub.status === "approved" && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E7D6B]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Approved
                      </span>
                    )}
                    {sub.status === "rejected" && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600">
                        <XCircle className="w-3.5 h-3.5" /> Rejected
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    {sub.status === "pending_review" ? (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleAction(sub.id, "approved")}
                          className="p-1.5 bg-[#EAF1EE] text-[#2E7D6B] hover:bg-[#dceae4] rounded-md transition-colors"
                          title="Approve Rate"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleAction(sub.id, "rejected")}
                          className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-md transition-colors"
                          title="Reject Rate"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-[#999990]">Completed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}