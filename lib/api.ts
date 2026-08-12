export interface FormSubmissionPayload {
  fullName: string;
  phone: string;
  email?: string;
  course?: string;
  interestedIn?: string;
  preferredContact?: string;
  message?: string;
  sourcePage?: string;
}

export async function submitCounsellingForm(payload: FormSubmissionPayload) {
  const res = await fetch("/api/send-counselling", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to submit enquiry.");
  }

  return res.json();
}
