export default function Rust() {
    return (
        <div className="text-base">
            <p>
                I first learned Rust out of necessity when I had to rewrite my T9 optimization solver from Python. The algorithm
                needed detailed performance and memory optimization that Python couldn't provide, so I made the jump
                to Rust. That project taught me about both the joys and pains of working with a verbose language that has strict
                requirements—the borrow checker was frustrating at first, but I came to appreciate how it prevents entire classes
                of bugs at compile time. I'm comfortable with Rust's ownership model, lifetimes, pattern matching, and the cargo
                ecosystem.
            </p>
        </div>)
}