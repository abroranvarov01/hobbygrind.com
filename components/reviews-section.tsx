import { Card } from "@/components/ui/card"

const reviews = [
	{
		text: "HobbyGrind's recommendations helped me pick the perfect rotary tool for jewelry work. The Dremel Lite is exactly what I needed!",
		author: "Amina R.",
		craft: "Jewelry Maker",
	},
	{
		text: "The motion design feels like my workshop — precise and alive. Great resource for finding the right tools.",
		author: "Daniel K.",
		craft: "Carpenter",
	},
	{
		text: "Finally found detailed comparisons that actually help. Bought the Dremel 8220 and couldn't be happier.",
		author: "Olivia P.",
		craft: "Sculptor",
	},
]


export function ReviewsSection() {
	return (
		<section className="relative py-32 px-4 bg-muted/20">
			<div className="max-w-7xl mx-auto">
				<h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-4">
					Makers <span className="text-primary">Speak</span>
				</h2>
				<p className="text-center text-muted-foreground mb-16 text-lg">Real feedback from real creators</p>

				<div className="grid md:grid-cols-3 gap-8">
					{reviews.map((review, index) => (
						<Card key={index} className="relative bg-card/50 backdrop-blur-sm border-border p-8">
							{/* Connecting line decoration */}
							<div className="absolute -top-4 left-1/2 w-px h-8 bg-gradient-to-b from-primary to-transparent" />

							<div className="mb-6">
								<svg viewBox="0 0 40 40" className="w-10 h-10 text-accent opacity-50">
									<path
										d="M 10 20 Q 10 10, 20 10 Q 30 10, 30 20 Q 30 30, 20 30 Q 10 30, 10 20"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
								</svg>
							</div>

							<p className="text-foreground mb-6 leading-relaxed italic">"{review.text}"</p>

							<div className="border-t border-border pt-4">
								<p className="font-semibold text-primary">{review.author}</p>
								<p className="text-sm text-muted-foreground">{review.craft}</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
