interface StatCardProps {
  label: string;
  value: string;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="stat-card">
      <h2>{label}</h2>
      <p>{value}</p>
    </div>
  );
}
