const stats = [
  { value: '$30M+', label: 'Ativos Gerenciados' },
  { value: '18.000+', label: 'Usuários Ativos' },
  { value: '25+', label: 'Profissionais' },
  { value: '99.9%', label: 'Uptime Garantido' },
];

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Geometric decorations */}
      <div className="absolute top-1/2 -left-4 w-32 h-32 border border-primary/20 rounded-full -translate-y-1/2" />
      <div className="absolute top-1/2 -right-4 w-24 h-24 border border-primary/10 rotate-45 -translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
