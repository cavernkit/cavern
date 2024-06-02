<div class="Spacer"></div>

<style>
    @layer components {
        .Spacer {
            flex: 1 0 0rem;
        }

        :global(.YStack[data-spacing="sm"]) > .Spacer {
            margin-bottom: -0.25rem;
            margin-top: -0.25rem;
        }
        :global(.YStack[data-spacing="md"]) > .Spacer {
            margin-bottom: -0.5rem;
            margin-top: -0.5rem;
        }
        :global(.YStack[data-spacing="lg"]) > .Spacer {
            margin-bottom: -0.75rem;
            margin-top: -0.75rem;
        }
    }
</style>
