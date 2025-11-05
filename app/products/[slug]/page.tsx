"use client"
import Link from "next/link"
import { ArrowLeft, Star, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

const products = [
	{
		name: "Dremel 8220",
		slug: "dremel-8220",
		description: "Cordless brushless rotary tool with accessory kit for precision tasks",
		fullDescription:
			"The Dremel 8220 is a versatile cordless rotary tool featuring a brushless motor for enhanced efficiency and durability. With a 12V lithium-ion battery, it delivers consistent power for precision tasks like cutting, grinding, and engraving. Its 30,000 RPM motor and versatile accessory kit make it ideal for detailed projects.",
		features: ["Cordless Freedom", "Brushless Motor", "Versatile Accessories"],
		rating: 4.5,
		price: "$129.99",
		image: "https://m.media-amazon.com/images/I/81-gdRp9N2L._AC_SX679_.jpg",
		pros: [
			"Long battery life",
			"High-performance brushless motor",
			"Compatible with Dremel accessories",
			"Ergonomic design",
		],
		cons: ["Higher price point", "Slightly heavier due to battery"],
		amazonLink: "https://www.amazon.com/Dremel-Cordless-Brushless-Rotary-Accessory/dp/B0BC2SV2K8",
	},
	{
		name: "PHALANX Rotary Tool",
		slug: "phalanx-rotary-tool",
		description: "Variable speed multi-tool from 8000-32000 RPM for DIY creations",
		fullDescription:
			"The PHALANX Rotary Tool offers a variable speed range of 8,000 to 32,000 RPM, making it suitable for a wide range of DIY projects, from crafting to repairs. The included accessory kit provides versatility for cutting, sanding, and polishing, perfect for hobbyists.",
		features: ["Variable Speed", "Multi-Tool Accessories", "For Crafting and Repairs"],
		rating: 4,
		price: "$39.99",
		image: "https://m.media-amazon.com/images/I/71j7l2CMjvL._AC_SX679_.jpg",
		pros: [
			"Affordable price",
			"Wide speed range",
			"Comprehensive accessory kit",
			"Easy to use for beginners",
		],
		cons: ["Lower build quality", "Less powerful than premium brands"],
		amazonLink: "https://www.amazon.com/PHALANX-8000-32000RPM-Multi-Tool-Accessories-Creations/dp/B09QXBC6XL",
	},
	{
		name: "Bosch Professional Rotary",
		slug: "bosch-professional-rotary",
		description: "10.8V professional rotary tool for high-precision work",
		fullDescription:
			"The Bosch Professional 10.8V Rotary Tool is designed for professionals requiring precision and portability. Its cordless design and high RPM capabilities make it ideal for detailed tasks like engraving and cutting. The tool’s robust build ensures durability for demanding projects.",
		features: ["Professional Grade", "Cordless Design", "High RPM"],
		rating: 4.5,
		price: "$149.99",
		image: "https://m.media-amazon.com/images/I/71i9PNn0EBL._SX522_.jpg",
		pros: [
			"High-quality construction",
			"Cordless convenience",
			"Powerful for professional use",
			"Ergonomic grip",
		],
		cons: ["Premium price", "Battery life could be longer"],
		amazonLink: "https://www.amazon.com/Bosch-Professional-06019C5000-10-8-Rotary/dp/B00H33P570",
	},
	{
		name: "Proxxon Model Building Kit",
		slug: "proxxon-model-building",
		description: "Precision tool kit for model building and engraving",
		fullDescription:
			"The Proxxon Model Building Kit is tailored for intricate tasks like model building and engraving. Its quiet operation and ultra-precise control make it a favorite among hobbyists and professionals working on delicate projects. The slim design ensures excellent handling.",
		features: ["Ultra Precise", "Quiet Operation", "For Intricate Details"],
		rating: 4.5,
		price: "$189.99",
		image: "https://m.media-amazon.com/images/I/71DelyfwFTS._AC_SX679_.jpg",
		pros: [
			"Exceptional precision",
			"Quiet and smooth operation",
			"Ideal for delicate work",
			"German engineering",
		],
		cons: ["Higher cost", "Not suited for heavy-duty tasks"],
		amazonLink: "https://www.amazon.com/Proxxon-38515-Model-Building-Engraving/dp/B0017NU8SS",
	},
	{
		name: "Makita RT0701C",
		slug: "makita-rt0701c",
		description: "1-1/4 HP compact router for woodworking and edging",
		fullDescription:
			"The Makita RT0701C is a powerful 1-1/4 HP compact router designed for woodworking and edging. Its variable speed control and soft-start feature provide smooth operation and precision. The durable construction makes it a reliable choice for professionals and DIY enthusiasts.",
		features: ["Compact Design", "Variable Speed", "Soft Start Feature"],
		rating: 4.7,
		price: "$139.99",
		image: "https://m.media-amazon.com/images/I/511ag05cuDL._AC_SX679_.jpg",
		pros: [
			"Powerful motor",
			"Smooth operation",
			"Durable build",
			"Great for woodworking",
		],
		cons: ["Corded design limits mobility", "Not ideal for intricate detail work"],
		amazonLink: "https://www.amazon.com/Makita-RT0701C-1-1-Compact-Router/dp/B00E7D3V4S",
	},
	{
		name: "WEN 2305",
		slug: "wen-2305",
		description: "Rotary tool with flexible shaft and accessories for versatile use",
		fullDescription:
			"The WEN 2305 is a budget-friendly rotary tool with a flexible shaft and over 100 accessories, making it a versatile choice for hobbyists. Its variable speed control allows for precise adjustments, suitable for cutting, grinding, and polishing tasks.",
		features: ["Flexible Shaft", "Variable Speed", "100+ Accessories"],
		rating: 4.3,
		price: "$34.99",
		image: "https://m.media-amazon.com/images/I/91BEKi9aGqL._AC_SX679_.jpg",
		pros: [
			"Excellent value",
			"Extensive accessory set",
			"Flexible shaft for precision",
			"Good for beginners",
		],
		cons: ["Lower power output", "Accessories may wear quickly"],
		amazonLink: "https://www.amazon.com/WEN-2305-Rotary-Tool-Shaft/dp/B003BYRFH8",
	},
	{
		name: "RYOBI 12V Rotary Tool",
		slug: "ryobi-12v-rotary",
		description: "Cordless rotary tool for crafting, engraving, and DIY projects",
		fullDescription:
			"The RYOBI 12V Cordless Rotary Tool is perfect for crafting, engraving, and light DIY projects. Its compact size and USB-rechargeable battery offer convenience and portability. The tool’s versatility makes it a great choice for hobbyists looking for a reliable cordless option.",
		features: ["Cordless Convenience", "Compact Size", "USB Rechargeable"],
		rating: 4.4,
		price: "$69.99",
		image: "https://m.media-amazon.com/images/I/51IADdD61cL._AC_SX679_.jpg",
		pros: [
			"Portable and lightweight",
			"USB charging convenience",
			"Good for small projects",
			"Affordable",
		],
		cons: ["Limited power for heavy tasks", "Smaller accessory range"],
		amazonLink: "https://www.amazon.com/RYOBI-12V-Cordless-Rotary-Tool/dp/B0BH6JB5C6",
	},
	{
		name: "WORKPRO Cordless Tool",
		slug: "workpro-cordless-tool",
		description: "Rechargeable rotary tool for engraving, polishing, and sanding",
		fullDescription:
			"The WORKPRO Cordless Tool is designed for engraving, polishing, and sanding with its rechargeable battery and multiple speed settings. The included accessory set ensures versatility for various DIY tasks, making it a great choice for hobbyists and crafters.",
		features: ["Rechargeable Battery", "Multiple Speeds", "Accessory Set Included"],
		rating: 4.2,
		price: "$49.99",
		image: "https://m.media-amazon.com/images/I/81L2Pw-a0AL._AC_SX679_.jpg",
		pros: [
			"Affordable cordless option",
			"Multiple speed settings",
			"Good accessory variety",
			"Easy to handle",
		],
		cons: ["Battery life could be better", "Not as powerful as corded models"],
		amazonLink: "https://www.amazon.com/WORKPRO-Accessories-Rechargeable-Engraving-Polishing/dp/B0CSPHVB75",
	},
	{
		name: "Foredom K.2230",
		slug: "foredom-k2230",
		description: "Classic jewelers kit with H.30 handpiece for professional jewelry work",
		fullDescription:
			"The Foredom K.2230 Classic Jewelers Kit is a professional-grade tool designed for jewelry making and intricate metalwork. Featuring a high-torque motor, flexible shaft, and H.30 handpiece, it offers precision and control. The included 42-piece accessory kit makes it ideal for professional jewelers.",
		features: ["High Torque Motor", "Flexible Shaft", "Accessory Kit"],
		rating: 4.4,
		price: "$438.46",
		image: "https://m.media-amazon.com/images/I/81NlDzaNI7L._AC_SX679_.jpg",
		pros: [
			"Professional-grade performance",
			"High torque for tough materials",
			"Reversible rotation",
			"Comprehensive accessory kit",
		],
		cons: ["Expensive", "Heavier handpiece"],
		amazonLink: "https://www.amazon.com/Foredom-2230-motor-Jewelers-Kit/dp/B01AHGKPX8",
	},
]

export default function ProductReviewPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products.find((p) => p.slug === params.slug)

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.grind === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"grind=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8 max-w-6xl">
				<Link
					href="/products"
					className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
				>
					<ArrowLeft size={16} />
					Back to Products
				</Link>

				<div className="grid lg:grid-cols-2 gap-12 mb-16">
					{/* Product Image */}
					<div className="relative">
						<Card className="overflow-hidden border-2 border-border">
							<img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto" />
						</Card>
					</div>

					{/* Product Info */}
					<div>
						<h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4">
							{product.name}
						</h1>

						<div className="flex items-center gap-4 mb-6">
							<div className="flex gap-1">
								{Array.from({ length: 5 }).map((_, i) => (
									<Star key={i} size={20} className={i < product.rating ? "fill-accent text-accent" : "text-muted"} />
								))}
							</div>
							<span className="text-muted-foreground">({product.rating}/5)</span>
						</div>



						<p className="text-lg leading-relaxed mb-8">{product.fullDescription}</p>

						<Button
							size="lg"
							className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-background hover:opacity-90"
							asChild
						>
							<a href={product.amazonLink} data-auto>
								View on Amazon <ExternalLink className="ml-2" size={18} />
							</a>
						</Button>
					</div>
				</div>

				{/* Features */}
				<Card className="p-8 mb-8 border-2 border-border">
					<h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6">Key Features</h2>
					<div className="grid md:grid-cols-3 gap-4">
						{product.features.map((feature) => (
							<div key={feature} className="flex items-center gap-3">
								<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
									<Check size={16} className="text-primary" />
								</div>
								<span className="font-medium">{feature}</span>
							</div>
						))}
					</div>
				</Card>

				{/* Pros and Cons */}
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					<Card className="p-8 border-2 border-border">
						<h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6 text-primary">Pros</h2>
						<ul className="space-y-3">
							{product.pros.map((pro) => (
								<li key={pro} className="flex items-start gap-3">
									<Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
									<span className="leading-relaxed">{pro}</span>
								</li>
							))}
						</ul>
					</Card>

					<Card className="p-8 border-2 border-border">
						<h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6 text-secondary">Cons</h2>
						<ul className="space-y-3">
							{product.cons.map((con) => (
								<li key={con} className="flex items-start gap-3">
									<span className="text-secondary flex-shrink-0 mt-0.5">−</span>
									<span className="leading-relaxed">{con}</span>
								</li>
							))}
						</ul>
					</Card>
				</div>

				{/* CTA */}

			</div>
		</div>
	)
}
