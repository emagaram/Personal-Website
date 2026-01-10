export default function AWS() {
    return <div className="text-base">
        <p>
            I've work with AWS's Lambda, EC2, and S3 services. I'm confident
            in optimizing for cost savings—when building my T9 solver, I analyzed the speed and cost tradeoffs
            between S3 and EC2 storage options to find the most efficient solution. My hardest AWS challenge was automating
            cost-optimized EC2 instances that shut down and restart at unpredictable times. I had to build a state
            persistence system that could save and resume machine state, ensuring the solver could
            pick up exactly where it left off after each interruption with minimal work loss.
        </p>
    </div>
}